const Body = () => {
    return (
        <main>
        <section className="main-section-first">
            <div className="section-heading">
                <h3>Customer Info</h3>
            </div>
            <div className="info">
                <div className="input-label">
                    <label for="CustomerName">Customer Name</label> <br> <br>
                    <label for="Check-in-date">Check in Date</label> <br> <br>
                    <label for="total-number-of-days">Total No. of Days</label> <br> <br>
                    <label for="total-number-of-persons">Total No of Persons</label>
                </div>

                <div className="input">
                    <input type="text"> text <br> <br>

                    <input type="text"> date <br> <br>

                    <input type="text"> number <br> <br>

                    <input type="text"> number <br> <br>
                </div>

            </div>
        </section>
            <section className="main-section-second">
                <div className="section-heading">
                    <h3>Select Room Type</h3>
                </div>
                <div className=" room-info">


                    <div className="input">
                        <div className="room-box">
                            A
                        </div>
                        <input type="radio"> Delux Room <br> <br>



                    </div>
                    <div className="input-label">
                        <div className="room-box">
                            B
                        </div>
                        <input type="radio"> suite Room <br> <br>
                    </div>
                </div>
            </section>
                    <section className="main-section-third">
                        <div className="section-heading">
                            <h3>Select Amenities</h3>
                        </div>
                        <div className=" room-info">


                            <div className="input">
                                <div className="room-box">
                                    A
                                </div>
                                <input type="checkbox"> A/C <br> <br>



                            </div>
                            <div className="input-label">
                                <div className="room-box">
                                    B
                                </div>
                                <input type="checkbox"> Locker <br> <br>


                            </div>



                        </div>


                    </section>
                    
                    <section className="main-section-fourth">
                        <div className="section-heading">
                            <h3>Advance Amount</h3>
                        </div>
                        <div className=" room-info">

                            <div className="input-label " id="AA">


                                Advance Amount

                            </div>


                            <div className="input">
                                <input type="text">


                            </div>



                        </div>
                    </section>

    </main>
    );
};
export default Body;