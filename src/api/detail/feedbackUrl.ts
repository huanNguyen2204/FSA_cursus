const feedbackUrl = {
  create: import.meta.env.VITE_DB + "/api/feedbacks/create",
  already: import.meta.env.VITE_DB + "/api/feedbacks/check-feedback-already",
  feedbackByCourseId: import.meta.env.VITE_DB + "/api/feedbacks/course-feedback-user"
}

export default feedbackUrl;