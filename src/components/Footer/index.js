import { Link } from "react-router-dom"
import { GrFacebookOption, GrGoogle, GrTwitter, GrInstagram } from "react-icons/gr"
import "./index.css"


const Footer = () => {
    return (
        <footer class="section bg-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="">
                            <h6 class="footer-heading text-uppercase text-white">Information</h6>
                            <ul class="list-unstyled footer-link mt-4">
                                <li><a href="www.google.com">Pages</a></li>
                                <li><a href="www.google.com">Our Team</a></li>
                                <li><a href="www.google.com">Feuchers</a></li>
                                <li><a href="www.google.com">Pricing</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="">
                            <h6 class="footer-heading text-uppercase text-white">Ressources</h6>
                            <ul class="list-unstyled footer-link mt-4">
                                <li><a href="">Monitoring Grader </a></li>
                                <li><a href="">Video Tutorial</a></li>
                                <li><a href="">Term &amp; Service</a></li>
                                <li><a href="">Zeeko API</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2">
                        <div class="">
                            <h6 class="footer-heading text-uppercase text-white">Help</h6>
                            <ul class="list-unstyled footer-link mt-4">
                                <li><a href="">Sign Up </a></li>
                                <li><a href="">Login</a></li>
                                <li><a href="">Terms of Services</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="">
                            <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
                            <p class="contact-info mt-4">Contact us if need help withanything</p>
                            <p class="contact-info">+01 123-456-7890</p>
                            <div class="mt-5">
                                <ul class="list-inline">
                                    <li class="list-inline-item facebook footer-social-icon"><a href="#"><GrFacebookOption className="white" /></a></li>
                                    <li class="list-inline-item twitter footer-social-icon"><a href="#"><GrTwitter className="white" /></a></li>
                                    <li class="list-inline-item google footer-social-icon"><a href="#"><GrGoogle className="white" /></a></li>
                                    <li class="list-inline-item apple footer-social-icon"><a href="#"><GrInstagram className="white" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div >

                </div >
            </div >
            <div class="text-center mt-5">
                <p class="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
            </div>
        </footer >
    )
}

export default Footer