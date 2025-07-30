import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/main.scss";

const App = () => {
    return (
        <div className="app-layout">
            <Header />

            <main className="app-content">


                <Hero />
                {/* <About /> */}
                {/* <Projects /> */}
                {/* <Contact /> */}

                <footer className="footer">
                    <p></p>
                </footer>
            </main>
        </div>
    );
};

export default App;
