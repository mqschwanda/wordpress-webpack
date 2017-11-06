const defaultState = {
  pages: [],
  posts: [],
  tags: [],
  categories: [],
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case ('UPDATE_PAGES'): return {
      ...state,
      pages: [
        ...state.pages,
        ...action.payload,
      ],
    };
    case ('UPDATE_CATEGORIES'): return {
      ...state,
      categories: [
        ...state.categories,
        ...action.payload,
      ],
    };
    case ('UPDATE_TAGS'): return {
      ...state,
      tags: [
        ...state.tags,
        ...action.payload,
      ],
    };
    case ('UPDATE_POSTS'): return {
      ...state,
      posts: [
        ...state.posts,
        ...action.payload,
      ],
    };
    default: return { ...state };
  }
}
