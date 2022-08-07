import graphql from "babel-plugin-relay/macro";

export const CreatePostMutation = graphql`
  mutation PostCreateMutation($input: createPostInput!) {
    post: createPost(input: $input) {
      caption
      createdAt
      image
      user {
        name
      }
    }
  }
`;

export const PostPaginationFragment = graphql`
  fragment PostDetails_query on Query
  @refetchable(queryName: "ViewPostPaginationQuery") {
    user(id: $userId) {
      posts(first: $first, page: $page, after: $after)
        @connection(key: "Posts_query_user_posts") {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        totalCount
        edges {
          node {
            id
            caption
            image
            likes {
              id
              email
              name
            }
            comments {
              id
              name
              date
              comment
              profilePic
            }
          }
        }
      }
    }
  }
`;

export const PostLikeMutation = graphql`
  mutation PostLikeDislikeMutation($postId: String!) {
    post: likeUnlikePost(postId: $postId) {
      image
      likes {
        name
        id
      }
    }
  }
`;

export const PostCommentMutation = graphql`
  mutation PostCommentMutation($postId: String!, $comment: String!) {
    post: commentOnPost(postId: $postId, comment: $comment) {
      caption
      id
      likes {
        id
        email
        name
      }
      comments {
        id
        name
        date
        comment
        profilePic
      }
    }
  }
`;
