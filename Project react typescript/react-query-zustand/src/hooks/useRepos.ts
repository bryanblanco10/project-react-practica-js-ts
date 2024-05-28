import api from "../api/github"
import { QueryFunctionContext, useQuery } from "@tanstack/react-query"
import { Repository } from "./types"
const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_key, userGithub] = ctx.queryKey
  const { data } = await api.get<Repository[]>(`users/${userGithub}/repos`)
  return data
}

export const useFetchRepositories = (userGithub: string) => {
  return useQuery({
    queryKey: ['repos', userGithub],
    queryFn: fetchRepos,
  })
}