import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/index"
import { PrivateRoute } from "./PrivateRoutes"
import { BooksPost, BooksDetail, BooksSearch, LoginPage, RegisterPage } from "../pages/index"
import { HOME, SIGN_UP, LOGIN, BOOKS_DETAIL, BOOKS_SEARCH } from "../constants/routes"

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<Layout />}>
                    <Route path={SIGN_UP} element={<RegisterPage />} />
                    <Route path={LOGIN} element={<LoginPage />} />
                    <Route index element={<PrivateRoute><BooksPost /></PrivateRoute>} />
                    <Route path={BOOKS_DETAIL} element={<BooksDetail />} />
                    <Route path={BOOKS_SEARCH} element={<PrivateRoute><BooksSearch /></PrivateRoute>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
