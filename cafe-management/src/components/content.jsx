import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CategoriesView from "./categories-view"
import ProductsView from "./products-view"
import BillsView from "./bills-view"
import OrdersView from "./orders-view"
import UsersView from "./users-view"

export function Content() {
  return (
    <section className="px-5 py-10">
      <div className="max-w-screen-lg mx-auto w-full">
        <Tabs defaultValue="categories">
          <TabsList>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="bills">Bills</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          <TabsContent value="categories">
            <CategoriesView />
          </TabsContent>
          <TabsContent value="products">
            <ProductsView />
          </TabsContent>
          <TabsContent value="bills">
            <BillsView />
          </TabsContent>
          <TabsContent value="orders">
            <OrdersView />
          </TabsContent>
          <TabsContent value="users">
            <UsersView />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
