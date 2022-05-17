import React from "react";
import { useRouter } from "next/router";
import Theme from "../../styles/Theme.module.css";
import { allPost } from "../../data/post";
import { Card, Row, Col, Form, Input,List, Avatar } from "antd";
import Header from "../../components/Header";


export default function BoradId() {
  const { TextArea } = Input;
  const router = useRouter();
  const [form] = Form.useForm();
  const [data, setData] = React.useState({});
  const [user, setUser] = React.useState({});
  const [userComment, setUserComment] = React.useState("");

  React.useEffect(() => {
    const queryID = router.query.BoradId; //string
    const id = parseInt(queryID, 10);
    console.log("getID", id);
    // setData(allPost[id - 1]);
    const allpost02 = {
      id: 2,
      username: "Bambapich",
      imgProfile: "../girl02.png",
      title: "Taylor Swift",
      subtitle:
        "Cause there we are again on that little town street You almost ran the red cause you were lookin over at me Wind in my hair, I was there I remember it all too well",
      image:
        "https://s.isanook.com/jo/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2pvLzAvdWQvNDg3LzI0MzgwNjUvd2lkZXBob3RvdGF5bG9yLmpwZw==.jpg",
      comment: [
        {
          id: 3,
          username: "Somza55+",
          imgProfile: "../boy04.png",
          commentContent:
            "And maybe we got lost in translation. Maybe I asked for too much",
        },
        {
          id: 4,
          username: "BabyPlengpii",
          imgProfile: "../boy05.png",
          commentContent:
            "But maybe this thing was a masterpiece til you tore it all up. Running scared, I was there",
        },
      ],
    };
    setData(allpost02);
    console.log("getdata", allPost[id - 1]);
    const userData = allPost[0];
    setUser(userData);
  }, [router.query]);

  const onFinish = (values) => {
    console.log("Success:", values.userComment);
    const userSubmitComment = {
      usernameComment: user.username,
      commentContent: values.userComment,
    };
    console.log("userSubmitComment: ", userSubmitComment);
    form.resetFields();
  };
  return (
    <div style={{ backgroundColor: "#4c4556", height: "100vh" }}>
      <Header /><br></br><div className={Theme.centerHorizonal}>
      <Card style={{ width: "650px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <div>
              <img src={data.image} style={{ width: "100%" }}></img>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ margin: "10px 0" }}>
              <h3 style={{ margin: "0" }}>{data.title}</h3>
              <h5
                style={{
                  textAlign: "left",
                  fontWeight: "400",
                  marginBottom: "10px",
                }}
              >
                {data.subtitle}
              </h5>
              <div style={{ whiteSpace: "nowrap", padding: "0px" }}>
                <img
                  className="rounded-corners"
                  style={{ background: "#202020", display: "inline" }}
                  alt="avatar"
                  src={data.imgProfile}
                  width="40"
                />
                <h3
                  style={{
                    color: "#000",
                    padding: "8px",
                    margin: "0px",
                    display: "inline",
                  }}
                >
                  {data.username}
                </h3>
              </div>
              <div style={{ margin: "20px 0" }}>
                <h3 style={{ fontWeight: "900" }}>Comments</h3>
                {data.comment ? 
                  <div>
                    <List
                      itemLayout="horizontal"
                      dataSource={data.comment}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={item.imgProfile}/>}
                            title={item.username}
                            description={item.commentContent}
                          />
                        </List.Item>
                      )}/>
                  </div>
                  :
                  <div>no comments</div>}
              </div>
              <div
                style={{ float: "left", whiteSpace: "nowrap", padding: "0px" }}
              >
                <img
                  className="rounded-corners"
                  style={{ background: "#202020", display: "inline" }}
                  alt="avatar"
                  src={user.imgProfile}
                  width="40"
                />
                {/* <form style={{ display: "inline !important", float: 'right' }}>
                  <h1>gg</h1>
                </form> */}
                {/* <TextArea style={{ display: "inline" }} placeholder="Controlled autosize" /> */}
                <Form
                  style={{
                    display: "inline !important",
                    float: "right",
                    width: "220px",
                  }}
                  form={form}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    style={{ marginBottom: "10px" }}
                    name="userComment"
                  >
                    <TextArea
                      style={{
                        marginLeft: "10px",
                        resize: "none",
                        borderRadius: "16px",
                        width: "230px",
                      }}
                      placeholder="Add a comment"
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <button
                      className={Theme.commentDoneBtn}
                      type="primary"
                      htmlType="submit"
                    >
                      Done
                      {/* <h2 style={{ margin: 0, color: '#fff' }}>Done</h2> */}
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
    </div>
    
  );
}
