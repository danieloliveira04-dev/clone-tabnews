function status(request, response) {
  response.status(200).json({ok: "alunos do curso.dev"});
}

export default status;