import { Button, List, Skeleton } from "antd";
import { exam } from "@/api";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface DataType {
  id: number | string;
  title: string;
  state: string;
  description: string;
  loading: boolean;
}

const count = 5;

const Exam: FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  const [record, setRecord] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    exam.getExam(page, count).then(response => {
      const newData = response.data.data.current_data.map(item => ({
        id: item.id,
        title: `${item.examTitle} 考试时间:${item.examStartTime}`,
        state: item.state,
        description: `剩余名额:(${item.stock}) ${item.startTime}~${item.endTime}`,
        loading: false,
      }));
      setInitLoading(false);
      setRecord(response.data.data.total_record);
      setData(newData);
      setList(newData);
    });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map((_, index) => ({
          loading: true,
          title: "Loading...",
          state: "CANCEL",
          description: "Loading...",
          id: index,
        }))
      )
    );
    exam.getExam(page + 1, count).then(response => {
      const newData = data.concat(
        response.data.data.current_data.map(item => ({
          id: item.id,
          title: `${item.examTitle} 考试时间:${item.examStartTime}`,
          state: item.state,
          description: `剩余名额:(${item.stock}) ${item.startTime}~${item.endTime}`,
          loading: false,
        }))
      );
      setData(newData);
      setList(newData);
      setPage(page + 1);
      setLoading(false);
      // window.dispatchEvent(new Event("resize"));
    });
  };

  const loadMore =
    !initLoading && !loading && list.length < record ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item, index) => (
        <Skeleton title={false} loading={item.loading} active>
          <List.Item
            actions={[
              item.state !== "PAY" ? (
                <Link to="/home/signup" state={{ examId: item.id }} key={index}>
                  报名
                </Link>
              ) : (
                <Link
                  to={`/home/details`}
                  state={{ title: item.title, examId: item.id }}
                  key={index}
                >
                  查看报名信息
                </Link>
              ),
            ]}
          >
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        </Skeleton>
      )}
    />
  );
};

export default Exam;
