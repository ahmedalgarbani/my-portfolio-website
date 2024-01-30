
import "./footer.css"

export default function Footer(){
    return(
        <>
        <div className="footer__main   text-center flex justify-center ">
<button className="Footer_btn__JIdlr  flex justify-center"  onClick={homePart}>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-black" width="2.2em" height="2.2em" fill="currentColor" viewBox="0 0 256 256" class="Footer_social__MfQNF"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="216" x2="128" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="56 112 128 40 200 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
    </button>
    <div className="flex__footer">
        
    <div class="Footer_icons__vFgv7" bis_skin_checked="1">
        <a href="https://github.com/ahmedalgarbani" target="_blank" rel="noreferrer noopener" className="footer__icon hover:text-black" >
            <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-black" width="2.2em" height="2.2em" fill="currentColor" viewBox="0 0 256 256" class="Footer_social__MfQNF"><rect width="256" height="256" fill="none"></rect><path d="M84,240a23.9,23.9,0,0,0,24-24V168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M172,240a23.9,23.9,0,0,1-24-24V168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/ahmedalgarbani"  className="footer__icon hover:decoration-[#00f]" target="_blank" rel="noreferrer noopener">
                <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-black" width="2.2em" height="2.2em" fill="currentColor" viewBox="0 0 256 256" class="Footer_social__MfQNF"><rect width="256" height="256" fill="none"></rect><rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="88" cy="80" r="12"></circle></svg>
            </a>
            <a href="https://twitter.com/#"  className="footer__icon hover:text-black" target="_blank" rel="noreferrer noopener">
                <div className="twitterX">

                </div>
            </a>
</div>
    </div>
        </div>
        </>
    )
    function homePart(){
        window.location="#home"
    }
}