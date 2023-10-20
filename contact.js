<form id="contactForm">
    <div class="form-row">
        <div class="col-md-6">
            <div class="form-group">
                <input type="text" class="form-control p-4" placeholder="Your Full Name" id="fullName" required="required" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <input type="email" class="form-control p-4" placeholder="Your Email" id="email" required="required" />
            </div>
        </div>
    </div>
    <div class="form-group">
        <input type="text" class="form-control p-4" placeholder="Subject" id="subject" required="required" />
    </div>
    <div class="form-group">
        <textarea class="form-control" rows="4" placeholder="Message" id="message" required="required"></textarea>
    </div>
    <div>
        <button class="btn btn-primary font-weight-semi-bold px-4" style="height: 50px;" type="submit">Send Message</button>
    </div>
</form>
