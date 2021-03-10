import { atom, selectorFamily } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const userStateArticles = atom({
  key: "userStateArticles",
  default: [],
});

export const userHasArticle = selectorFamily({
  key: "userHasArticle",
  get: (articleId) => ({ get }) => {
    const articles = get(userStateArticles);

    const hasArticle = articles.find((article) => article.id === articleId);

    return !!hasArticle;
  },
});
