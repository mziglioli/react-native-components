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
  recommendations?: [] | null;
  scoreQtd: number;
}
