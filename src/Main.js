import vidbg from "./vidbg.mp4";

const Main = () => {
    return (
        <div className="relative h-screen z-50">
            <video autoPlay loop muted className="object-scale-down w-full h-full brightness-50">
                <source src={vidbg} type="video/mp4" />
            </video>
        </div>
    );
}

export default Main;