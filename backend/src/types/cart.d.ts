export interface Cart {
  id: number,
  userId: number,
  status: "active" | "purchase" | "delete",
  createdAt: string,
  updatedAt: string
}