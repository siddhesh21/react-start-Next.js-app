import React from "react";
import { useRecoilValue } from "recoil";
import { userStateArticles } from "../atoms/userAtom";

function SavedArticles() {
  const articles = useRecoilValue(userStateArticles);
  return (
    <div>
      {articles.map(({ body, id, title, userId }) => (
        <div key={id}>
          <h4 >
            {title} by user #{userId}
          </h4>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedArticles;
