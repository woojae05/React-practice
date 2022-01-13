import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

function Page() {
  const [posts, setPosts] = useState([]);  // 데이터 배열
  const [loading, setLoading] = useState(false);  // 로딩 
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage, setPostsPerPage] = useState(10); // 페이지 당 데이터 수

  async function fetchData() {  // 데이터 통신 
    setLoading(true);
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage; // 배열을 자를 때 쓰이는 인덱스 번호(첫 번쨰)
  const indexOfFirst = indexOfLast - postsPerPage; // '' (마지막) 
  
  function currentPosts(tmp) {
    let currentPosts = [];  
    currentPosts = tmp.slice(indexOfFirst, indexOfLast); // indexOfFirst ~ indexOfLast(포함 안됨) 까지 잘라 배열생성 
    return currentPosts; // 만든 배열 리턴
  }

  return (
    <div >
      <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
    </div>
  );
}

export default Page;