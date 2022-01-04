export interface Provider {
  active: boolean;
  id: string;
  name: string;
  email: string;
  address?: string | null;
  city?: string | null;
  postCode?: string | null;
  phone?: string | null;
  creatorId: string;
  scoreAvg: number;
  recommendationsUserIds?: string[] | null;
  recommendations?: RecommendationsUsers | null;
  scoreQtd: number;
  avatar?: string;
}
export interface User {
  id: string;
  name: string;
  initials: string;
  email: string;
  mediaId: string;
  mediaType: string;
  avatar?: string;
  recommendationsProviderIds: string[] | null;
  recommendations: RecommendationsProviders | null;
}
export type RecommendationsUsers = RecommendationUser[];
export interface RecommendationUser {
  id: string;
  name: string;
  initials: string;
  email: string;
  mediaId: string;
  mediaType: string;
  avatar?: string;
  date: string;
  score: number;
  comments: string;
}
export type RecommendationsProviders = RecommendationProvider[];
export interface RecommendationProvider {
  id: string;
  name: string;
  phone?: string;
  date: string;
  score: number;
  avatar?: string;
  comments: string;
}
