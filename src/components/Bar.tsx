import framerlogo from "../assets/framerlogo.svg"

const Bar = () => {
  return (
    <div className="hidden lg:flex justify-between p-5 items-center">
        <div className="flex gap-x-2">
            <img src={framerlogo} alt="" />
            <p className="font-semibold">Framer</p>
        </div>
        <div className="flex gap-x-1">
            <p>Why Framer</p>
            <p>v</p>
        </div>
        <div className="flex gap-x-1">
            <p>Templates</p>
            <p>v</p>
        </div>
        <div className="flex gap-x-1">
            <p>Community</p>
            <p>v</p>
        </div>
        <div className="flex gap-x-1">
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
        <div className="flex bg-gradient-to-r from-[#0099FF] to-[#CC00FF] rounded-lg py-2 px-4 text-white">
            <p>Publish your site for free</p>
        </div>
    </div>
  )
}

export default Bar