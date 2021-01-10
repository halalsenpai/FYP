import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import "./styles.css";

export default function ListPlace(props) {
	const [places, setPlaces] = useState(props.placex);

	const initialValues = {
		title: "",
		category: "",
		description: "",
		city: "",
		placeBy: "",
	};
	const [values, setValues] = useState(initialValues);
	function handleFormSubmit() {
		console.log(values);
	}
	function handleInputChange(e) {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	}
	return (
		<>
			<Container fluid className="list-place-cont">
				<Header floated="left">
					<Container style={{ padding: "70px", marginLeft: "5em" }}>
						<h1>See What's Possible</h1>
						<p>Earn up to $277 a month hosting in Karachi</p>
					</Container>
				</Header>

				<Segment className="list-place-segment" floated="right" raised>
					<Header as="h1">List your space by telling us more about it</Header>
					<Form onSubmit={handleFormSubmit}>
						<Form.Field>
							<label>Name of the Place</label>
							<input
								name="title"
								value={values.title}
								onChange={(e) => handleInputChange(e)}
							/>
						</Form.Field>
						<Form.Group widths="equal">
							<Form.Field>
								<label>Address</label>
								<input
									name="address"
									value={values.placeBy}
									onChange={(e) => handleInputChange(e)}
								/>
							</Form.Field>
						</Form.Group>
						<Header as="h4">Category</Header>
						<Form.Group>
							<Form.Field
								name="category"
								value={values.category}
								onChange={(e) => handleInputChange(e)}
								control="select"
								width="4"
								label="Category"
							>
								{" "}
								<option value="">Choose City</option>
								<option value="Karachi">Karachi</option>
								<option value="Lahore">Lahore</option>
							</Form.Field>
							<Form.Field
								control="select"
								width="5"
								label="Neighborhood"
								required
							>
								{" "}
								<option value="1">Dastagir </option>
								<option value="2">Gulshan-e-Iqbal </option>
								<option value="3">Gulistan-e-Johar </option>
								<option value="4">100 Quarters </option>
								<option value="5">ASF Airport Residencia </option>
								<option value="6">ASF Housing Scheme </option>
								<option value="7">Abdullah Ahmed Road </option>
								<option value="8">Abdullah Haroon Road </option>
								<option value="9">Abid Town </option>
								<option value="10">Abu Zar Ghaffari </option>
								<option value="11">Abul Hassan Isphani Road </option>
								<option value="12">Agra Taj Colony </option>
								<option value="13">Ahsan Grand City </option>
								<option value="14">Ahsanabad </option>
								<option value="15">Airport </option>
								<option value="16">Akhtar Colony </option>
								<option value="17">Al Falah Society </option>
								<option value="18">Al-Jadeed Residency </option>
								<option value="19">Al-Manzar Society </option>
								<option value="20">Alamgir Society </option>
								<option value="21">Ali Garh Society </option>
								<option value="22">Allama Iqbal Colony </option>
								<option value="23">Allama Iqbal Town </option>
								<option value="24">Altaf Hussain Road </option>
								<option value="25">Amil Colony </option>
								<option value="26">Amir Khusro </option>
								<option value="27">Ancholi </option>
								<option value="28">Anda Mor Road </option>
								<option value="29">Ashraf Nagar </option>
								<option value="30">Askari i </option>
								<option value="31">Askari ii </option>
								<option value="32">Askari iii </option>
								<option value="33">Askari iv </option>
								<option value="34">Askari v </option>
								<option value="35">Awami Colony </option>
								<option value="36">Azam Basti </option>
								<option value="37">Azam Town </option>
								<option value="38">Azeemabad </option>
								<option value="39">Azizabad </option>
								<option value="40">BMCHS </option>
								<option value="41">Baba Bhit </option>
								<option value="42">Bagh-e-Korangi </option>
								<option value="43">Baghdadi </option>
								<option value="44">Bahadurabad </option>
								<option value="45">Bahria Town Karachi </option>
								<option value="46">Baldia Town </option>
								<option value="47">Baloch Colony </option>
								<option value="48">Baloch Goth </option>
								<option value="49">Banaras Colony </option>
								<option value="50">Bandhani Colony </option>
								<option value="51">Bangladesh Colony </option>
								<option value="52">Bath Island </option>
								<option value="53">Beaumont Road </option>
								<option value="54">Behar Colony </option>
								<option value="55">Bhains Colony </option>
								<option value="56">Bhiroo Goth </option>
								<option value="57">Bhutta Village </option>
								<option value="58">Bhutto Nagar </option>
								<option value="59">Bilal Colony </option>
								<option value="60">Bilal Town </option>
								<option value="61">Bin Qasim Town </option>
								<option value="62">Blue Bell Residency </option>
								<option value="63">Bolton Market </option>
								<option value="64">Britto Road </option>
								<option value="65">Buffer Zone 1 </option>
								<option value="66">Buffer Zone 2 </option>
								<option value="67">Burmi Colony </option>
								<option value="68">Burns Road </option>
								<option value="69">Cantt </option>
								<option value="70">Catholic Colony </option>
								<option value="71">Central Jacob Lines </option>
								<option value="72">Chakiwara </option>
								<option value="73">Chakra Goth </option>
								<option value="74">Chanesar Goth </option>
								<option value="75">Chapal Courtyard </option>
								<option value="76">Chapal Uptown </option>
								<option value="77">Chishti Nagar </option>
								<option value="78">Circular Road </option>
								<option value="79">City Court </option>
								<option value="80">City Railway Station </option>
								<option value="81">Civic Centre </option>
								<option value="82">Civil Lines </option>
								<option value="83">Clifton </option>
								<option value="84">Clifton </option>
								<option value="85">Club Road </option>
								<option value="86">Comissioner Coop Housing Society </option>
								<option value="87">Cosmopolitan Society </option>
								<option value="88">
									Cotton Export Cooperative Housing Society{" "}
								</option>
								<option value="89">
									Cutchi Memon Cooperative Housing Society{" "}
								</option>
								<option value="90">DHA City Karachi </option>
								<option value="91">DHA Phase 1 </option>
								<option value="92">DHA Phase 2 </option>
								<option value="93">DHA Phase 4 </option>
								<option value="94">DHA Phase 5 </option>
								<option value="95">DHA Phase 5 </option>
								<option value="96">DHA Phase 6 </option>
								<option value="97">DHA Phase 7 </option>
								<option value="98">DHA Phase 8 </option>
								<option value="99">Dak Khana </option>
								<option value="100">Dalmia Cement Factory Road </option>
								<option value="101">Darsano Chana </option>
								<option value="102">Darussalam Coop Society </option>
								<option value="103">Darya Abad </option>
								<option value="104">Dastgir Colony </option>
								<option value="105">Data Nagar </option>
								<option value="106">Daud Colony </option>
								<option value="107">Defence Garden </option>
								<option value="108">Defence View Society </option>
								<option value="109">Delhi Colony </option>
								<option value="110">Delhi Mercentile Society </option>
								<option value="111">Denso Hall </option>
								<option value="112">Dhabeji </option>
								<option value="113">Diamond City </option>
								<option value="114">Dr Daud Pota Road </option>
								<option value="115">Drigh Colony </option>
								<option value="116">Dural Aman Society </option>
								<option value="117">Erum Villas </option>
								<option value="118">Essa Nagri </option>
								<option value="119">Etawa Society </option>
								<option value="120">Faisal Cantonment </option>
								<option value="121">Falaknaz Dreams </option>
								<option value="122">Falaknaz Dynasty </option>
								<option value="123">Falaknaz Presidency </option>
								<option value="124">Falcon Complex Faisal </option>
								<option value="125">Falcon Complex New Malir </option>
								<option value="126">Farhan Dream Land </option>
								<option value="127">Farooq-e-Azam </option>
								<option value="128">Fatima Jinnah Colony </option>
								<option value="129">Fazaia Housing Scheme </option>
								<option value="130">Federal B Area </option>
								<option value="131">Firdos Colony </option>
								<option value="132">Frere Town </option>
								<option value="133">Friends Royal City </option>
								<option value="134">Frontier Colony </option>
								<option value="135">Gadap Town </option>
								<option value="136">Gaghar </option>
								<option value="137">Garden City </option>
								<option value="138">Garden East </option>
								<option value="139">Garden West </option>
								<option value="140">Gazdarabad </option>
								<option value="141">Ghani Chowrangi </option>
								<option value="142">Gharibabad </option>
								<option value="143">Gharo </option>
								<option value="144">Ghazi Brohi Goth </option>
								<option value="145">Ghaziabad </option>
								<option value="146">Gillani Railway Station </option>
								<option value="147">Gizri </option>
								<option value="148">Gizri Road </option>
								<option value="149">Gobal Town </option>
								<option value="150">Godhra </option>
								<option value="151">Goth Ibrahim Haidri </option>
								<option value="152">Government Teachers Society </option>
								<option value="153">Gujjar Chowk </option>
								<option value="154">Gulbai </option>
								<option value="155">Gulberg Town </option>
								<option value="156">Gulistan-e-Jauhar Block 1 </option>
								<option value="157">Gulistan-e-Jauhar Block 10 </option>
								<option value="158">Gulistan-e-Jauhar Block 11 </option>
								<option value="159">Gulistan-e-Jauhar Block 12 </option>
								<option value="160">Gulistan-e-Jauhar Block 13 </option>
								<option value="161">Gulistan-e-Jauhar Block 14 </option>
								<option value="162">Gulistan-e-Jauhar Block 15 </option>
								<option value="163">Gulistan-e-Jauhar Block 16 </option>
								<option value="164">Gulistan-e-Jauhar Block 17 </option>
								<option value="165">Gulistan-e-Jauhar Block 18 </option>
								<option value="166">Gulistan-e-Jauhar Block 19 </option>
								<option value="167">Gulistan-e-Jauhar Block 2 </option>
								<option value="168">Gulistan-e-Jauhar Block 20 </option>
								<option value="169">Gulistan-e-Jauhar Block 3 </option>
								<option value="170">Gulistan-e-Jauhar Block 4 </option>
								<option value="171">Gulistan-e-Jauhar Block 5 </option>
								<option value="172">Gulistan-e-Jauhar Block 6 </option>
								<option value="173">Gulistan-e-Jauhar Block 7 </option>
								<option value="174">Gulistan-e-Jauhar Block 8 </option>
								<option value="175">Gulistan-e-Jauhar Block 9 </option>
								<option value="176">Gulshan-E-Ghazi </option>
								<option value="177">Gulshan-E-Hadeed </option>
								<option value="178">Gulshan-E-Iqbal Block 1 </option>
								<option value="179">Gulshan-E-Iqbal Block 10 </option>
								<option value="180">Gulshan-E-Iqbal Block 11 </option>
								<option value="181">Gulshan-E-Iqbal Block 13 </option>
								<option value="182">Gulshan-E-Iqbal Block 2 </option>
								<option value="183">Gulshan-E-Iqbal Block 3 </option>
								<option value="184">Gulshan-E-Iqbal Block 4 </option>
								<option value="185">Gulshan-E-Iqbal Block 5 </option>
								<option value="186">Gulshan-E-Iqbal Block 6 </option>
								<option value="187">Gulshan-E-Iqbal Block 7 </option>
								<option value="188">Gulshan-E-Iqbal Block 8 </option>
								<option value="189">Gulshan-E-Iqbal Block 9 </option>
								<option value="190">Gulshan-e-Aisha </option>
								<option value="191">Gulshan-e-Azeem </option>
								<option value="192">Gulshan-e-Kaneez Fatima </option>
								<option value="193">Gulshan-e-Malir </option>
								<option value="194">Gulshan-e-Maymar </option>
								<option value="195">Gulshan-e-Mehmood ul Haq </option>
								<option value="196">Gulshan-e-Mehran </option>
								<option value="197">Gulshan-e-Millat </option>
								<option value="198">Gulshan-e-Rabia </option>
								<option value="199">Gulshan-e-Saeed </option>
								<option value="200">Gulshan-e-Shameem </option>
								<option value="201">Gulshan-e-Tauheed </option>
								<option value="202">Gulshan-e-Usman Housing Society </option>
								<option value="203">Gulshan_e_Ghazian </option>
								<option value="204">Gulzar Colony </option>
								<option value="205">Gulzar-E-Hijri </option>
								<option value="206">Haidery </option>
								<option value="207">Hamza Residency </option>
								<option value="208">Hanifabad </option>
								<option value="209">Haryana Colony </option>
								<option value="210">Hasrat Mohani Colony </option>
								<option value="211">Hawks Bay Scheme 42 </option>
								<option value="212">Hazara ColonyHill Park </option>
								<option value="213">Hoshang Road </option>
								<option value="214">Hub River Road </option>
								<option value="215">Hussainabad </option>
								<option value="216">I.I. Chundrigar Road </option>
								<option value="217">Intelligence Colony </option>
								<option value="218">Iqbal Baloch Colony </option>
								<option value="219">Islam Nagar </option>
								<option value="220">Islamia Colony </option>
								<option value="221">Itahad Town </option>
								<option value="222">Jafar-E-Tayyar </option>
								<option value="223">Jahanabad </option>
								<option value="224">Jamaluddin Afghani Road </option>
								<option value="225">Jamshed Quarter </option>
								<option value="226">Jamshed Quarters </option>
								<option value="227">Jamshed Road </option>
								<option value="228">Jamshed Town </option>
								<option value="229">
									Javed Bahria Coopretive Housing Society{" "}
								</option>
								<option value="230">Jinnah Avenue </option>
								<option value="231">Jinnah Garden </option>
								<option value="232">Jodhpur Society </option>
								<option value="233">Jut Line </option>
								<option value="234">KDA Employees Society - Korangi </option>
								<option value="235">KDA Scheme 1 </option>
								<option value="236">KPT Officers Society </option>
								<option value="237">Kala Board </option>
								<option value="238">Kalyana </option>
								<option value="239">
									Karachi Administration Employees Society{" "}
								</option>
								<option value="240">Karachi Golf City </option>
								<option value="241">Karachi Motorway </option>
								<option value="242">Karimabad </option>
								<option value="243">Kashmir Colony </option>
								<option value="244">Kashmir Road </option>
								<option value="245">Kehkashan </option>
								<option value="246">Kemari Town </option>
								<option value="247">Khada Memon Societ </option>
								<option value="248">Khalid Bin Walid Road </option>
								<option value="249">Khaliq-uz-Zaman Road </option>
								<option value="250">Khameeso Goth </option>
								<option value="251">Khando Goth </option>
								<option value="252">Kharadar </option>
								<option value="253">Khawaja Ajmeer Nagri </option>
								<option value="254">Khayaban-e-Ittehad Road </option>
								<option value="255">Khokarapar </option>
								<option value="256">Khudadad Colony </option>
								<option value="257">Korangi </option>
								<option value="258">Korangi Creek Cantonment </option>
								<option value="259">Korangi Industrial Area </option>
								<option value="260">Korangi Sector 33 </option>
								<option value="261">Lakhani Fantasia </option>
								<option value="262">Lalukhet </option>
								<option value="263">Landhi 1 </option>
								<option value="264">Landhi 2 </option>
								<option value="265">Landhi Colony </option>
								<option value="266">Laraib Garden </option>
								<option value="267">Liaquat Avenue </option>
								<option value="268">Liaquatabad </option>
								<option value="269">Light House </option>
								<option value="270">Lucknow Society </option>
								<option value="271">Lyari Expressway </option>
								<option value="272">Lyari Town </option>
								<option value="273">M.A. Jinnah Road </option>
								<option value="274">MT Khan Road </option>
								<option value="275">Machar Colony </option>
								<option value="276">Madina City Housing Scheme </option>
								<option value="277">Madina Colony </option>
								<option value="278">Madina Colony </option>
								<option value="279">Mai Kolachi Bypass </option>
								<option value="280">Malir </option>
								<option value="281">Malir Cantonment </option>
								<option value="282">Malir Halt </option>
								<option value="283">Malir Housing Scheme 1 </option>
								<option value="284">Malir Link To Super Highway </option>
								<option value="285">Mangopir </option>
								<option value="286">Manzoor Colony </option>
								<option value="287">Maqboolabad Society </option>
								<option value="288">Maripur </option>
								<option value="289">Maskan Chowrangi </option>
								<option value="290">Mauripur Road </option>
								<option value="291">Maymarabad </option>
								<option value="292">Mehmoodabad </option>
								<option value="293">Metrovil </option>
								<option value="294">Metroville </option>
								<option value="295">Millat Nagar/Islam Pura </option>
								<option value="296">Mithadar </option>
								<option value="297">Model Colony </option>
								<option value="298">Model Colony - Malir </option>
								<option value="299">Mohammad Nagar </option>
								<option value="300">Moinabad </option>
								<option value="301">Mominabad </option>
								<option value="302">Moria Goth </option>
								<option value="303">Muhajir Camp </option>
								<option value="304">
									Muhammad Bin Qasim Co-operative Housing Society{" "}
								</option>
								<option value="305">Mujahid Colony </option>
								<option value="306">Mujahidabad </option>
								<option value="307">Murad Memon Goth </option>
								<option value="308">Muslim Mujahid Colony </option>
								<option value="309">Muslimabad </option>
								<option value="310">Mustafa Taj Colony </option>
								<option value="311">Mustufa Colony </option>
								<option value="312">Muzaffarabad Colony </option>
								<option value="313">Nanak Wara </option>
								<option value="314">Nasir Colony </option>
								<option value="315">Nasirabad </option>
								<option value="316">Natha Khan Goth </option>
								<option value="317">National Highway </option>
								<option value="318">Naval Housing Scheme </option>
								<option value="319">Navy Housing Scheme Karsaz </option>
								<option value="320">Nawabad </option>
								<option value="321">Naya Nazimabad </option>
								<option value="322">Nazimabad </option>
								<option value="323">Neelam Colony </option>
								<option value="324">New Karachi </option>
								<option value="325">Nishtar Road (Lawrence Road) </option>
								<option value="326">Nooriabad Industrial Area </option>
								<option value="327">North Karachi </option>
								<option value="328">North Karachi Buffer Zone </option>
								<option value="329">North Nazimabad </option>
								<option value="330">Northern Bypass </option>
								<option value="331">Nusrat Bhutto Colony </option>
								<option value="332">Old Clifton </option>
								<option value="333">Old Golimar </option>
								<option value="334">Old Haji Camp </option>
								<option value="335">Old Queens Road </option>
								<option value="336">
									Old Ravians Co-Operative Housing Society{" "}
								</option>
								<option value="337">Orangi Town </option>
								<option value="338">Others </option>
								<option value="339">P &amp; T Colony </option>
								<option value="340">P+B3.I.B. Colony </option>
								<option value="341">PAF Housing Scheme </option>
								<option value="342">PECHS </option>
								<option value="343">PIDC </option>
								<option value="344">PTV Society </option>
								<option value="345">Pahar Ganj </option>
								<option value="346">Pak Colony </option>
								<option value="347">
									Pak Ideal Cooperative Housing Society{" "}
								</option>
								<option value="348">Pak Sadat Colony </option>
								<option value="349">Pakistan Chowk </option>
								<option value="350">Pakistan Quarters </option>
								<option value="351">Paposh Nagar </option>
								<option value="352">Park View Tower </option>
								<option value="353">Parsi Colony </option>
								<option value="354">Patel Para </option>
								<option value="355">Pathan Colony </option>
								<option value="356">Pechs I </option>
								<option value="357">Pechs II </option>
								<option value="358">Pehlwan Goth </option>
								<option value="359">Punjab Chowrangi </option>
								<option value="360">Punjab Colony </option>
								<option value="361">Qasba Colony </option>
								<option value="362">Qasiambad </option>
								<option value="363">Qayyumabad </option>
								<option value="364">Quaidabad </option>
								<option value="365">Rabia City </option>
								<option value="366">Ragiwara </option>
								<option value="367">Ranchore Line Bazar </option>
								<option value="368">Rasheedabad </option>
								<option value="369">Rashid Minhas Road </option>
								<option value="370">Rehri </option>
								<option value="371">Reta Plot </option>
								<option value="372">Rifah Aam </option>
								<option value="373">Rizvia Society </option>
								<option value="374">Royal 8 Icon </option>
								<option value="375">Royal Tower </option>
								<option value="376">Rufi Lake Drive Apartments </option>
								<option value="377">Rufi Rose Petals </option>
								<option value="378">S.I.T.E </option>
								<option value="379">SMCHS - Sindhi Muslim Society </option>
								<option value="380">Saadi Road </option>
								<option value="381">Saadi Town </option>
								<option value="382">Saddar </option>
								<option value="383">Saddar Town </option>
								<option value="384">Saeedabad </option>
								<option value="385">Safoora Goth </option>
								<option value="386">
									Saharanpur Cooperative Housing Society{" "}
								</option>
								<option value="387">Saima Arabian Villas </option>
								<option value="388">Saima Luxury Homes </option>
								<option value="389">Sakhi Hasan </option>
								<option value="390">Saudabad </option>
								<option value="391">Scheme 33 </option>
								<option value="392">Scheme 45 </option>
								<option value="393">Sea View Apartments </option>
								<option value="394">Seven Wonders City </option>
								<option value="395">Shadman Town </option>
								<option value="396">Shafeeque Mill Colony </option>
								<option value="397">Shah Baig Line </option>
								<option value="398">Shah Faisal Town </option>
								<option value="399">Shah Latif Town </option>
								<option value="400">Shah Nawaz Bhutto Colony </option>
								<option value="401">Shah Rasool Colony </option>
								<option value="402">Shah Town </option>
								<option value="403">Shaheed-e-Millat Expressway </option>
								<option value="404">Shahra-e-Faisal </option>
								<option value="405">Shahra-e-Jahangir </option>
								<option value="406">Shahra-e-Liaquat </option>
								<option value="407">Shahra-e-Qaideen </option>
								<option value="408">Shahra-e-Usman </option>
								<option value="409">Shanti Nagar </option>
								<option value="410">Sharifabad </option>
								<option value="411">Sher Shah Suri Road </option>
								<option value="412">Sherabad </option>
								<option value="413">Shershah </option>
								<option value="414">Shirafi Goth </option>
								<option value="415">Sindh Industrial Trading Estate </option>
								<option value="416">Singo Line </option>
								<option value="417">Sir Syed </option>
								<option value="418">Soldier Bazar </option>
								<option value="419">Stadium Road </option>
								<option value="420">
									State Bank of Pakistan Staff Co-Operative Housing Society{" "}
								</option>
								<option value="421">Steel Town </option>
								<option value="422">Sultanabad </option>
								<option value="423">Suparco Road </option>
								<option value="424">Super HighwaySurjani Town </option>
								<option value="425">Tahir Villa </option>
								<option value="426">Taiser Town </option>
								<option value="427">Tariq Road </option>
								<option value="428">Teachers SocietyTechno City </option>
								<option value="429">Tipu Sultan Road </option>
								<option value="430">University Road </option>
								<option value="431">Yaseenabad </option>
								<option value="432">Yousuf Goth </option>
								<option value="433">Zaman Town </option>
								<option value="434">Zamzama </option>
								<option value="435"> </option>
							</Form.Field>
							<Form.Field width="7">
								<label>Description</label>
								<input
									name="description"
									value={values.description}
									onChange={(e) => handleInputChange(e)}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group widths="equal">
							{/* <Form.Field>
								<label>Buisness Phone No.</label>
								<input
									type="tel"
									pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
									required
								/>
							</Form.Field> */}
							<Form.Field>
								<label>Buisness Email</label>
								<input type="email" />
							</Form.Field>
						</Form.Group>
						<Button type="submit">Submit</Button>
					</Form>
				</Segment>
			</Container>
		</>
	);
}
