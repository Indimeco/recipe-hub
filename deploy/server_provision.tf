resource "aws_iam_role" "server_role" {
  name = "server_role"

  assume_role_policy = file("${path.module}/server_role.json")
}

resource "aws_lambda_function" "server_lambda" {
  filename      = "recipehub-graphql.zip"
  function_name = "recipehub-graphql"
  role          = "aws_iam_role.server_role.arn"
  handler       = "exports.graphqlHandler"

  source_code_hash = "filebase64sha256('recipehub-graphql.zip')"

  runtime = "nodejs12.x"

  environment {
    variables = {
      DATABASE_URI = "???"
    }
  }
}

output "recipehub_server_uri" {
  value = aws_lambda_function.server_lambda.arn
}