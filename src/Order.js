import React, {useState} from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Order() {

    const { t } = useTranslation();
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");

    function afterOrder(response) {

    }

    function updateEmail(event){
      setEmail(event.target.value);
    }

    function updateMessage(event) {
      setMessage(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      handleOrder();
    }

    function handleOrder() {
      
      let APIurl = "http://0.0.0.0:5000/order";
      let orderData = { email: email, message: message };
      axios.post(APIurl, orderData).then(afterOrder);
    }


     return (
       <div className="Encomende">
         <section className="header">
           <h2>{t("orderPage.title")}</h2>
           <form onSubmit={handleSubmit}>
             <div className="form-group">
               <label for="exampleFormControlInput1">E-mail address</label>
               <input
                 type="email"
                 className="form-control"
                 id="exampleFormControlInput1"
                 placeholder="name@example.com"
                 onChange={updateEmail}
               ></input>
             </div>
             <div class="form-group">
               <label for="exampleFormControlTextarea1">Example textarea</label>
               <textarea
                 className="form-control"
                 id="exampleFormControlTextarea1"
                 rows="3"
                 onChange={updateMessage}
               ></textarea>
             </div>
             <button type="submit" className="btn btn-primary">
               Submit
             </button>
           </form>
         </section>
       </div>
     );
}