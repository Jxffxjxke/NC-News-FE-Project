import React from "react";
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = React.useRef();

export const DeleteCommentAlert = (commentId) => {
  const handleRemoveComment = (commentId) => {
    setComments((currComments) => {
      return currComments.filter((comment) => comment.comment_id !== commentId);
    });
  };
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Comment
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onclose;
                removeCommentHandler(commentId);
                handleRemoveComment(commentId);
              }}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
