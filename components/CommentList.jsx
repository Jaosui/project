import React from "react";
import { Card, List } from "antd";
import Image from "next/image";
import { allPost } from "../data/post";
import Theme from "../styles/Theme.module.css";
import { useRouter } from "next/router";
import { saveStory, getStory } from "../util/handleFirebase";


export default function CommentList() {
  // const [commentBtn, setCommentBtnBtn] = React.useState(false);
  const router = useRouter();
  const [allPost1, setAllPost1] = React.useState([]);

  const pickBorad = (id) => {
    console.log("id: ", id);
    const BoradId = parseInt(id, 10);
    console.log(BoradId);
    router.push({
      pathname: "/post/[BoradId]",
      query: { BoradId: BoradId },
    });
  };

  React.useEffect(() => {
    // console.log('comment', data)
    dataPost()
  }, []);

  const dataPost = async () => {
    const data = await getStory()
    console.log('data post', data)
    setAllPost1(data)
  }

  return (
    <div style={{ margin: "0 25px" }}>
      {/* <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={allPost}
        renderItem={(item) => (
          <List.Item>
            <div>
              <Card
                className={Theme.postCard}
                onClick={() => pickBorad(item.id)}
              >
                <img src={item.image} style={{ width: "100%" }}></img>

                <h4
                  style={{
                    margin: "0px",
                  }}
                >
                  {item.title}
                </h4>
                <h5>{item.subtitle}</h5>
                <hr style={{ border: "0.5px solid #000" }}></hr>
                <div style={{ whiteSpace: "nowrap", padding: "0px" }}>
                  <img
                    className="rounded-corners"
                    style={{ background: "#202020", display: "inline" }}
                    alt="avatar"
                    src={item.imgProfile}
                    width="25"
                  />
                  <h5
                    style={{
                      color: "#000",
                      padding: "8px",
                      margin: "0px",
                      display: "inline",
                    }}
                  >
                    {item.username}
                  </h5>
                  <img
                    className={Theme.commentLogo}
                    src="./comment.png"
                    alt="comment"
                  ></img>
                </div>
              </Card>
            </div>
          </List.Item>
        )}
      /> */}
      {/* <h2>test{allPost1}</h2> */}
      <List
         grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 5,
          xl: 5,
          xxl: 5,
        }}
        dataSource={allPost1}
        renderItem={(item) => (
          <List.Item>
            <div>
              <Card
                className={Theme.postCard}
                onClick={() => pickBorad(item.postID)}
              >
                {item.image === [] ? <img src={item.image} style={{ width: "100%" }}></img> :<span></span>}
                {item.title !== '' ? <h4
                  style={{
                    margin: "0px",
                  }}
                >
                  {item.title}
                </h4>: <span></span>}
                {item.subtitle !== '' ? <h5>{item.subtitle}</h5> :<span></span>}
                <hr style={{ border: "0.5px solid #000" }}></hr>
                <div style={{ whiteSpace: "nowrap", padding: "0px" }}>
                  <img
                    className="rounded-corners"
                    style={{ background: "#202020", display: "inline" }}
                    alt="avatar"
                    src={item.imgProfile}
                    width="25"
                  />
                  <h5
                    style={{
                      color: "#000",
                      padding: "8px",
                      margin: "0px",
                      display: "inline",
                    }}
                  >
                    {item.username}
                  </h5>
                  <img
                    className={Theme.commentLogo}
                    src="./comment.png"
                    alt="comment"
                  ></img>
                </div>
              </Card>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
