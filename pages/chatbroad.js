import React from "react";
import Header from "../components/Header";
import CommentList from '../components/CommentList'
import AddList from '../components/AddList'

export default function chatbroad() {
  return (
    <div style={{ backgroundColor: "#4c4556", height: "100vh" }}>
      <Header /><br></br>
      <CommentList />
      <AddList />
    </div>
  );
}
