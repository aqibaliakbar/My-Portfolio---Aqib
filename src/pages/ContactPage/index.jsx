import "./index.css";
import ContactItem from "../../components/ContactItem";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";

const ContactPage = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref);
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tx7re1w",
        "template_j76ckwo",
        formRef.current,
        "mmMAKWRNfYP3btg9t"
      )
      .then(
        () => {
          setSuccess(true);
          setOpen(true);
          setError(false);
          // Reset form fields
          formRef.current.reset();
        },
        () => {
          setError(true);
          setOpen(true);
          setSuccess(false);
        }
      );
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="main-layout">
      <Title title={"Contact"} span={"Contact"} />
      <section className=" inner-layout contact-section">
        <div className="left-content">
          <div className="contact-title">
            <h4>Get In Touch</h4>
          </div>
          <motion.div
            ref={ref}
            className="contactSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <svg width="700px" height="700px" viewBox="0 0 64 64">
              <motion.path
                fill="none"
                strokeWidth={0.2}
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 4 }}
                d="M32,1C14.9072,1,1.001,14.9067,1.001,32S14.9072,63,32,63s30.999-13.9067,30.999-31S49.0928,1,32,1z M46.7568,31    c-0.0324-2.1485-0.1685-4.2808-0.4067-6.3666c1.3589-0.485,2.4686-1.4901,3.0918-2.7772    C56.0771,24.0959,60.2359,27.4291,60.8954,31H46.7568z M44.3726,39.0518c-2.9026,0.0765-5.2448,2.4193-5.3213,5.3214    c-1.9846,0.2237-4.0108,0.3524-6.0513,0.3841V33h11.7568C44.7252,35.0426,44.5967,37.0689,44.3726,39.0518z M33,31V19.246    c2.0505,0.0314,4.0767,0.1591,6.0513,0.381c0.0766,2.902,2.4188,5.2447,5.3213,5.3212c0.2241,1.9828,0.3527,4.0092,0.3843,6.0518    H33z M44.5176,22.9556c-1.915,0-3.4736-1.5581-3.4736-3.4736c0-1.915,1.5586-3.4731,3.4736-3.4731s3.4736,1.5581,3.4736,3.4731    C47.9912,21.3975,46.4326,22.9556,44.5176,22.9556z M39.366,17.6501c-2.0773-0.2368-4.2094-0.372-6.366-0.4041V3.1034    c3.5742,0.6591,6.9073,4.8182,9.1432,11.4547C40.8559,15.1812,39.8508,16.2911,39.366,17.6501z M31,3.097v14.1451    c-3.6047,0.052-7.0351,0.3829-10.2034,0.9517C22.8394,9.7535,26.668,3.8873,31,3.097z M31,19.2421V31h-7.3917    c-0.3975-2.1418-2.0439-3.8463-4.1541-4.3305c0.184-2.2051,0.478-4.3188,0.8689-6.3129    C23.6259,19.6952,27.2342,19.3017,31,19.2421z M18.2314,35.4731c-1.918,0-3.4775-1.5581-3.4775-3.4731    s1.5596-3.4731,3.4775-3.4731c1.915,0,3.4727,1.5581,3.4727,3.4731S20.1465,35.4731,18.2314,35.4731z M17.4542,26.5885    c-2.3233,0.3321-4.1789,2.121-4.6044,4.4115H3.103c0.8047-4.3291,6.7612-8.1297,15.0952-10.1736    C17.8681,22.6607,17.6182,24.5873,17.4542,26.5885z M12.8498,33c0.4255,2.2905,2.2811,4.0794,4.6044,4.4115    c0.1642,2.0023,0.4142,3.93,0.7446,5.7653C9.8643,41.1323,3.9075,37.3306,3.103,33H12.8498z M19.4542,37.3305    c2.1101-0.4842,3.7565-2.1887,4.1541-4.3305H31v11.7614c-3.7656-0.0596-7.3736-0.4533-10.6763-1.1147    C19.9324,41.6517,19.6383,39.5368,19.4542,37.3305z M31,46.7613V60.903c-4.3314-0.7902-8.1597-6.6549-10.2026-15.0935    C23.9655,46.3783,27.3956,46.7093,31,46.7613z M33,60.8964V46.7573c2.1461-0.0324,4.2782-0.1686,6.366-0.4072    c0.4849,1.359,1.4902,2.4689,2.7775,3.092C39.9038,56.0775,36.5709,60.2366,33,60.8964z M41.0439,44.5181    c0-1.9155,1.5586-3.4736,3.4736-3.4736s3.4736,1.5581,3.4736,3.4736c0,1.915-1.5586,3.4731-3.4736,3.4731    S41.0439,46.4331,41.0439,44.5181z M46.35,39.3666c0.2383-2.0858,0.3743-4.2181,0.4067-6.3666h14.1387    c-0.6595,3.5709-4.8183,6.9041-11.4536,9.1438C48.8187,40.8568,47.7089,39.8516,46.35,39.3666z M60.3704,25.9969    c-2.2195-2.4177-5.7788-4.5214-10.4017-6.0711c0.0118-0.1468,0.0225-0.294,0.0225-0.4438c0-3.0181-2.4551-5.4731-5.4736-5.4731    c-0.1496,0-0.2966,0.0106-0.4432,0.0225c-1.5475-4.6228-3.6501-8.182-6.0676-10.4017    C49.1861,5.9941,58.0074,14.8167,60.3704,25.9969z M25.9716,3.6345c-3.2159,2.9634-5.822,8.2573-7.3279,14.9893    c-6.7022,1.4893-12.0201,4.0807-15.0005,7.3146C6.023,14.7933,14.8222,6.0018,25.9716,3.6345z M3.6436,38.0635    c2.9807,3.2344,8.2986,5.8265,15.0007,7.316c1.5061,6.7305,4.1119,12.023,7.3273,14.986    C14.8229,57.9984,6.024,49.2076,3.6436,38.0635z M38.003,60.3714c2.4175-2.2197,4.5209-5.7791,6.0702-10.4027    c0.147,0.0119,0.2944,0.0225,0.4444,0.0225c3.0186,0,5.4736-2.4551,5.4736-5.4731c0-0.1498-0.0107-0.2971-0.0225-0.4438    c4.6229-1.5497,8.1822-3.6534,10.4017-6.0711C58.0072,49.1846,49.1841,58.0081,38.003,60.3714z"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <div className="form-field">
              <label htmlFor="name">Enter your name*</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Enter your email*</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-field">
              <label htmlFor="subject">Enter your subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-field">
              <label htmlFor="text-area">Enter your Message*</label>
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-field f-button">
              <PrimaryButton title={"Send Email"} />
            </div>
            {error && "Error"}

            {success && (
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    background: "var(--border-color)",
                    color: "var(--primary-color)",
                    "@media(max-width: 600px)": {
                      width: "50%",
                    },
                    "& .MuiAlert-icon": {
                      color: "var(--primary-color)",
                    },
                  }}
                >
                  Sent!
                </Alert>
              </Snackbar>
            )}
          </motion.form>
        </div>
        <div className="right-content">
          <ContactItem
            title={"Phone"}
            icon={phone}
            cont1={"+92-315-XX888XX"}
            // cont2={"0000000"}
          />
          <ContactItem
            title={"Email"}
            icon={email}
            cont1={"aqibaliakbar@gmail.com"}
            // cont2={"info.@gmail.com"}
          />
          <ContactItem
            title={"Address"}
            icon={location}
            cont1={"XYZ Road, Lahore,"}
            cont2={"Pakistan"}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
