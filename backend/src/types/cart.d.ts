export interface Cart {
  id: number,
  userId: number,
  status: "active" | "purchased" | "delete",
  createdAt: string,
  updatedAt: string
}