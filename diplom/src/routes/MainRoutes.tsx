import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout"
import { BooksPost } from "../pages/BooksPost/BooksPost"
import { BooksDetail } from "../pages/BooksDetails/BooksDetail"
import { BooksSearch } from "../pages/BooksSearch/BooksSearch"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/signin" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route index element={<BooksPost />} />
                    <Route path="books/:booksId" element={<BooksDetail />} />
                    <Route path="books/search" element={<BooksSearch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
