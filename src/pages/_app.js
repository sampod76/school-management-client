import AuthProvider from "@/components/Auth/AuthProvider";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { StyleProvider } from "@ant-design/cssinjs";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/styles.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
// const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  //next line will be comment after the job is done
  // const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <StyleProvider hashPriority="high">
        {/* <QueryClientProvider client={queryClient}> */}
          <AuthProvider>
            {/* will be uncomment  */}

            <Layout>
              <Component {...pageProps} />
            </Layout>

            {/* next line will be comment after the job is done  */}
            {/* {getLayout(<Component {...pageProps} />)}
             */}
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </AuthProvider>
        {/* </QueryClientProvider> */}
      </StyleProvider>
    </Provider>
  );
}
