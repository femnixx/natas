import framerlogo from "../assets/framerlogo.svg"

const Bar = () => {
  return (
    <div className="hidden lg:flex justify-between p-5">
        <div className="flex">
            <img src={framerlogo} alt="" />
            <p className="font-semibold">Framer</p>
        </div>
        <div className="flex">
            <p>Why Framer</p>
            <p>v</p>
        </div>
        <div className="flex">
            <p>Templates</p>
            <p>v</p>
        </div>
        <div className="flex">
            <p>Community</p>
            <p>v</p>
        </div>
        <div className="flex">
            <p>Resources</p>
            <p>v</p>
        </div>
        <div className="flex">
            <p>Awards</p>
        </div>
        <div className="flex">
            <p>Business</p>
        </div>
        <div className="flex">
            <p>Pricing</p>
        </div>
        <div className="flex">
            <p>Publish your site for free</p>
        </div>
    </div>
  )
}

export default Bar