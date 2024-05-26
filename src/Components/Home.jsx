import Main from "./Main";

const Home = () => {
    const greet = () => {
        const mes = prompt("grreting boy's");
        console.log(mes)
    };

    return <Main greet={greet} />;
};

export default Home;
