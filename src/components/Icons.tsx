import {
	LogIn,
	Linkedin,
	Rss,
	type Icon as LucideIcon,
	ArrowRight,
	LucideProps
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
	logo: ({...props}) => (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="github"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 638 638"
			{...props}
		>
			<path fill="#020202"
				d="M43.998970,188.018097 C65.969978,143.460052 96.070671,106.007042 135.581711,76.365707 C171.111130,49.711388 210.619186,31.549105 254.034958,22.054203 C288.518768,14.512704 323.265259,12.913606 358.299164,17.652246 C425.908203,26.796967 484.357819,55.095055 532.851746,102.878426 C578.985840,148.336487 607.836670,203.337814 619.088440,267.313965 C628.190430,319.066925 624.251038,369.874664 607.019165,419.477020 C589.096252,471.068481 559.414307,514.832703 518.031372,550.604309 C477.869781,585.320190 431.693939,607.966980 379.818695,618.652344 C347.309601,625.348694 314.478119,626.474243 281.392456,622.386780 C235.474762,616.713928 193.183929,601.263000 154.347778,576.439270 C112.917976,549.957764 79.837708,515.272705 55.176899,472.694092 C31.688007,432.138855 18.300779,388.453186 14.859754,341.684204 C10.908513,287.980591 21.201653,237.013382 43.998970,188.018097 M438.063751,78.417900 C385.320251,53.033653 330.157959,44.399242 272.349854,54.820690 C205.307648,66.906830 150.233276,99.575165 108.197670,153.054810 C61.153889,212.906097 43.519821,281.364563 53.396381,356.576202 C59.102287,400.027649 74.684715,440.184448 101.187958,475.273712 C163.543015,557.829407 246.685822,595.309998 349.702606,584.787292 C418.864624,577.722595 477.003784,546.663147 521.965027,493.575287 C581.433044,423.358582 600.799011,342.232819 578.699219,253.069931 C559.123901,174.092499 511.112213,116.212440 438.063751,78.417900 z"/>
			<path fill="#F7F7F7" opacity="1.000000" stroke="none" 
				d="M438.384857,78.606979 C511.112213,116.212440 559.123901,174.092499 578.699219,253.069931 C600.799011,342.232819 581.433044,423.358582 521.965027,493.575287 C477.003784,546.663147 418.864624,577.722595 349.702606,584.787292 C246.685822,595.309998 163.543015,557.829407 101.187958,475.273712 C74.684715,440.184448 59.102287,400.027649 53.396381,356.576202 C43.519821,281.364563 61.153889,212.906097 108.197670,153.054810 C150.233276,99.575165 205.307648,66.906830 272.349854,54.820690 C330.157959,44.399242 385.320251,53.033653 438.384857,78.606979 M544.117126,448.560303 C576.080505,392.261780 585.947754,332.155731 573.627502,268.769592 C564.439575,221.498688 543.580872,179.515625 510.494232,144.395279 C448.116425,78.183395 371.140808,50.683716 281.098145,62.439838 C231.454468,68.921394 186.910873,89.125420 149.562378,122.730347 C72.798096,191.800278 44.758274,277.898102 66.444817,378.524628 C81.833298,449.927856 123.308609,504.633392 185.709061,542.135254 C246.370209,578.591797 312.164062,588.177063 380.981842,571.269043 C452.309082,553.744324 506.213562,512.171631 544.117126,448.560303 z"/>
			<path fill="#010101" opacity="1.000000" stroke="none" 
				d="M543.949158,448.886047 C506.213562,512.171631 452.309082,553.744324 380.981842,571.269043 C312.164062,588.177063 246.370209,578.591797 185.709061,542.135254 C123.308609,504.633392 81.833298,449.927856 66.444817,378.524628 C44.758274,277.898102 72.798096,191.800278 149.562378,122.730347 C186.910873,89.125420 231.454468,68.921394 281.098145,62.439838 C371.140808,50.683716 448.116425,78.183395 510.494232,144.395279 C543.580872,179.515625 564.439575,221.498688 573.627502,268.769592 C585.947754,332.155731 576.080505,392.261780 543.949158,448.886047 M254.532944,125.999855 C253.533295,125.999855 252.533661,125.999763 251.534012,125.999863 C243.651718,126.000641 243.651199,126.000656 243.651169,133.764908 C243.650986,173.420502 243.650650,213.076096 243.651489,252.731689 C243.651642,259.994080 243.654053,259.999023 250.661636,259.999237 C297.148651,260.000793 343.635681,260.000641 390.122711,259.999390 C396.698639,259.999207 396.720673,259.995087 396.721863,253.336365 C396.729095,212.847672 396.662903,172.358734 396.813812,131.870605 C396.830505,127.386475 395.756195,125.871063 390.986755,125.890465 C345.833466,126.074158 300.679077,125.999855 254.532944,125.999855 M149.037476,487.452850 C160.817764,500.543274 175.663391,508.151642 192.655914,512.035217 C211.784103,516.406799 231.043335,515.585205 250.287872,513.419861 C263.238983,511.962708 275.911285,509.011078 287.394226,502.542114 C306.417267,491.825378 314.746033,474.779572 315.681946,453.316345 C298.268799,453.316345 280.878632,453.316345 263.530273,453.316345 C261.298523,470.813934 249.578156,477.722168 237.236282,479.202454 C232.136993,479.814056 226.944260,480.172363 221.821594,479.964996 C206.327454,479.337738 193.858200,472.711548 187.170563,458.540863 C177.001358,436.993011 176.248047,414.863525 187.004868,393.125610 C191.274063,384.498169 198.303360,378.348694 207.384964,374.892120 C219.972427,370.101288 232.768906,369.923401 245.552200,374.000885 C253.630569,376.577698 259.230896,382.027588 262.282684,389.963745 C263.097504,392.082611 263.594940,394.323517 264.177277,396.301819 C281.248474,396.301819 297.877899,396.301819 314.912842,396.301819 C314.469604,392.440155 314.330719,388.769562 313.595154,385.222717 C308.937866,362.766388 293.788879,349.762085 273.163208,343.105194 C241.955292,333.032959 210.344559,333.924438 179.406601,344.263733 C160.036880,350.737000 145.617279,363.718781 137.056061,382.768616 C129.016525,400.657654 127.714531,419.469269 129.466537,438.534302 C131.106506,456.380280 136.326080,473.110596 149.037476,487.452850 M396.830475,420.499939 C396.830475,450.447601 396.830475,480.395264 396.830475,510.499207 C413.418243,510.499207 429.617371,510.499207 446.221497,510.499207 C446.221497,465.430908 446.221497,420.696838 446.221497,375.541138 C468.180634,375.541138 489.733887,375.541138 511.262604,375.541138 C511.262604,363.841644 511.262604,352.569397 511.262604,341.327881 C451.147339,341.327881 391.279694,341.327881 331.366486,341.327881 C331.366486,352.916565 331.366486,364.174805 331.366486,376.004944 C353.246643,376.004944 374.932770,376.004944 396.830475,376.004944 C396.830475,390.885010 396.830475,405.192444 396.830475,420.499939 z"/>
			<path fill="#F9CB15" opacity="1.000000" stroke="none" 
				d="M255.028992,125.999855 C300.679077,125.999855 345.833466,126.074158 390.986755,125.890465 C395.756195,125.871063 396.830505,127.386475 396.813812,131.870605 C396.662903,172.358734 396.729095,212.847672 396.721863,253.336365 C396.720673,259.995087 396.698639,259.999207 390.122711,259.999390 C343.635681,260.000641 297.148651,260.000793 250.661636,259.999237 C243.654053,259.999023 243.651642,259.994080 243.651489,252.731689 C243.650650,213.076096 243.650986,173.420502 243.651169,133.764908 C243.651199,126.000656 243.651718,126.000641 251.534012,125.999863 C252.533661,125.999763 253.533295,125.999855 255.028992,125.999855 M268.469788,147.889389 C266.776520,147.082886 265.083221,146.276398 263.156281,145.358612 C262.305969,154.562759 262.307465,154.559769 269.542114,158.151825 C274.151886,160.440643 278.762634,162.727768 283.360962,165.039536 C285.745056,166.238113 288.103119,167.488556 291.181396,169.082382 C283.009827,173.127258 275.871643,176.658691 268.735199,180.193695 C261.883118,183.587860 261.814392,183.742737 263.412079,192.327072 C264.505859,191.894516 265.587341,191.558060 266.586609,191.057602 C276.979919,185.852646 287.260162,180.406006 297.799805,175.518097 C301.325348,173.883102 300.900116,171.494461 301.070770,168.702209 C301.248718,165.791046 300.696869,163.892899 297.693542,162.466324 C288.096893,157.907959 278.679138,152.972931 268.469788,147.889389 M363.298798,183.148254 C349.019318,183.148254 334.739838,183.148254 320.422119,183.148254 C320.422119,186.766861 320.422119,189.805099 320.422119,192.754532 C336.401611,192.754532 352.006195,192.754532 367.979187,192.754532 C367.979187,190.538193 367.803864,188.555649 368.019623,186.616623 C368.358063,183.574982 366.899017,182.784683 363.298798,183.148254 z"/>
			<path fill="#FDFDFD" opacity="1.000000" stroke="none" 
				d="M148.810425,487.179260 C136.326080,473.110596 131.106506,456.380280 129.466537,438.534302 C127.714531,419.469269 129.016525,400.657654 137.056061,382.768616 C145.617279,363.718781 160.036880,350.737000 179.406601,344.263733 C210.344559,333.924438 241.955292,333.032959 273.163208,343.105194 C293.788879,349.762085 308.937866,362.766388 313.595154,385.222717 C314.330719,388.769562 314.469604,392.440155 314.912842,396.301819 C297.877899,396.301819 281.248474,396.301819 264.177277,396.301819 C263.594940,394.323517 263.097504,392.082611 262.282684,389.963745 C259.230896,382.027588 253.630569,376.577698 245.552200,374.000885 C232.768906,369.923401 219.972427,370.101288 207.384964,374.892120 C198.303360,378.348694 191.274063,384.498169 187.004868,393.125610 C176.248047,414.863525 177.001358,436.993011 187.170563,458.540863 C193.858200,472.711548 206.327454,479.337738 221.821594,479.964996 C226.944260,480.172363 232.136993,479.814056 237.236282,479.202454 C249.578156,477.722168 261.298523,470.813934 263.530273,453.316345 C280.878632,453.316345 298.268799,453.316345 315.681946,453.316345 C314.746033,474.779572 306.417267,491.825378 287.394226,502.542114 C275.911285,509.011078 263.238983,511.962708 250.287872,513.419861 C231.043335,515.585205 211.784103,516.406799 192.655914,512.035217 C175.663391,508.151642 160.817764,500.543274 148.810425,487.179260 z"/>
			<path fill="#FEFEFE" opacity="1.000000" stroke="none" 
				d="M396.830475,419.999908 C396.830475,405.192444 396.830475,390.885010 396.830475,376.004944 C374.932770,376.004944 353.246643,376.004944 331.366486,376.004944 C331.366486,364.174805 331.366486,352.916565 331.366486,341.327881 C391.279694,341.327881 451.147339,341.327881 511.262604,341.327881 C511.262604,352.569397 511.262604,363.841644 511.262604,375.541138 C489.733887,375.541138 468.180634,375.541138 446.221497,375.541138 C446.221497,420.696838 446.221497,465.430908 446.221497,510.499207 C429.617371,510.499207 413.418243,510.499207 396.830475,510.499207 C396.830475,480.395264 396.830475,450.447601 396.830475,419.999908 z"/>
			<path fill="#0A0801" opacity="1.000000" stroke="none" 
				d="M268.831055,148.036362 C278.679138,152.972931 288.096893,157.907959 297.693542,162.466324 C300.696869,163.892899 301.248718,165.791046 301.070770,168.702209 C300.900116,171.494461 301.325348,173.883102 297.799805,175.518097 C287.260162,180.406006 276.979919,185.852646 266.586609,191.057602 C265.587341,191.558060 264.505859,191.894516 263.412079,192.327072 C261.814392,183.742737 261.883118,183.587860 268.735199,180.193695 C275.871643,176.658691 283.009827,173.127258 291.181396,169.082382 C288.103119,167.488556 285.745056,166.238113 283.360962,165.039536 C278.762634,162.727768 274.151886,160.440643 269.542114,158.151825 C262.307465,154.559769 262.305969,154.562759 263.156281,145.358612 C265.083221,146.276398 266.776520,147.082886 268.831055,148.036362 z"/>
			<path fill="#070601" opacity="1.000000" stroke="none" 
				d="M363.772339,183.148376 C366.899017,182.784683 368.358063,183.574982 368.019623,186.616623 C367.803864,188.555649 367.979187,190.538193 367.979187,192.754532 C352.006195,192.754532 336.401611,192.754532 320.422119,192.754532 C320.422119,189.805099 320.422119,186.766861 320.422119,183.148254 C334.739838,183.148254 349.019318,183.148254 363.772339,183.148376 z"/>
		</svg>
	),
	logoAlt1: ({...props}) => (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="github"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 638 638"
			{...props}
		>
			<path fill="currentColor"
				d="M43.998970,188.018097 C65.969978,143.460052 96.070671,106.007042 135.581711,76.365707 C171.111130,49.711388 210.619186,31.549105 254.034958,22.054203 C288.518768,14.512704 323.265259,12.913606 358.299164,17.652246 C425.908203,26.796967 484.357819,55.095055 532.851746,102.878426 C578.985840,148.336487 607.836670,203.337814 619.088440,267.313965 C628.190430,319.066925 624.251038,369.874664 607.019165,419.477020 C589.096252,471.068481 559.414307,514.832703 518.031372,550.604309 C477.869781,585.320190 431.693939,607.966980 379.818695,618.652344 C347.309601,625.348694 314.478119,626.474243 281.392456,622.386780 C235.474762,616.713928 193.183929,601.263000 154.347778,576.439270 C112.917976,549.957764 79.837708,515.272705 55.176899,472.694092 C31.688007,432.138855 18.300779,388.453186 14.859754,341.684204 C10.908513,287.980591 21.201653,237.013382 43.998970,188.018097 M438.063751,78.417900 C385.320251,53.033653 330.157959,44.399242 272.349854,54.820690 C205.307648,66.906830 150.233276,99.575165 108.197670,153.054810 C61.153889,212.906097 43.519821,281.364563 53.396381,356.576202 C59.102287,400.027649 74.684715,440.184448 101.187958,475.273712 C163.543015,557.829407 246.685822,595.309998 349.702606,584.787292 C418.864624,577.722595 477.003784,546.663147 521.965027,493.575287 C581.433044,423.358582 600.799011,342.232819 578.699219,253.069931 C559.123901,174.092499 511.112213,116.212440 438.063751,78.417900 z"/>
			<path fill="currentColor" opacity="1.000000" stroke="none" 
				d="M543.949158,448.886047 C506.213562,512.171631 452.309082,553.744324 380.981842,571.269043 C312.164062,588.177063 246.370209,578.591797 185.709061,542.135254 C123.308609,504.633392 81.833298,449.927856 66.444817,378.524628 C44.758274,277.898102 72.798096,191.800278 149.562378,122.730347 C186.910873,89.125420 231.454468,68.921394 281.098145,62.439838 C371.140808,50.683716 448.116425,78.183395 510.494232,144.395279 C543.580872,179.515625 564.439575,221.498688 573.627502,268.769592 C585.947754,332.155731 576.080505,392.261780 543.949158,448.886047 M254.532944,125.999855 C253.533295,125.999855 252.533661,125.999763 251.534012,125.999863 C243.651718,126.000641 243.651199,126.000656 243.651169,133.764908 C243.650986,173.420502 243.650650,213.076096 243.651489,252.731689 C243.651642,259.994080 243.654053,259.999023 250.661636,259.999237 C297.148651,260.000793 343.635681,260.000641 390.122711,259.999390 C396.698639,259.999207 396.720673,259.995087 396.721863,253.336365 C396.729095,212.847672 396.662903,172.358734 396.813812,131.870605 C396.830505,127.386475 395.756195,125.871063 390.986755,125.890465 C345.833466,126.074158 300.679077,125.999855 254.532944,125.999855 M149.037476,487.452850 C160.817764,500.543274 175.663391,508.151642 192.655914,512.035217 C211.784103,516.406799 231.043335,515.585205 250.287872,513.419861 C263.238983,511.962708 275.911285,509.011078 287.394226,502.542114 C306.417267,491.825378 314.746033,474.779572 315.681946,453.316345 C298.268799,453.316345 280.878632,453.316345 263.530273,453.316345 C261.298523,470.813934 249.578156,477.722168 237.236282,479.202454 C232.136993,479.814056 226.944260,480.172363 221.821594,479.964996 C206.327454,479.337738 193.858200,472.711548 187.170563,458.540863 C177.001358,436.993011 176.248047,414.863525 187.004868,393.125610 C191.274063,384.498169 198.303360,378.348694 207.384964,374.892120 C219.972427,370.101288 232.768906,369.923401 245.552200,374.000885 C253.630569,376.577698 259.230896,382.027588 262.282684,389.963745 C263.097504,392.082611 263.594940,394.323517 264.177277,396.301819 C281.248474,396.301819 297.877899,396.301819 314.912842,396.301819 C314.469604,392.440155 314.330719,388.769562 313.595154,385.222717 C308.937866,362.766388 293.788879,349.762085 273.163208,343.105194 C241.955292,333.032959 210.344559,333.924438 179.406601,344.263733 C160.036880,350.737000 145.617279,363.718781 137.056061,382.768616 C129.016525,400.657654 127.714531,419.469269 129.466537,438.534302 C131.106506,456.380280 136.326080,473.110596 149.037476,487.452850 M396.830475,420.499939 C396.830475,450.447601 396.830475,480.395264 396.830475,510.499207 C413.418243,510.499207 429.617371,510.499207 446.221497,510.499207 C446.221497,465.430908 446.221497,420.696838 446.221497,375.541138 C468.180634,375.541138 489.733887,375.541138 511.262604,375.541138 C511.262604,363.841644 511.262604,352.569397 511.262604,341.327881 C451.147339,341.327881 391.279694,341.327881 331.366486,341.327881 C331.366486,352.916565 331.366486,364.174805 331.366486,376.004944 C353.246643,376.004944 374.932770,376.004944 396.830475,376.004944 C396.830475,390.885010 396.830475,405.192444 396.830475,420.499939 z"/>
			<path fill="currentColor" opacity="1.000000" stroke="none" 
				d="M268.831055,148.036362 C278.679138,152.972931 288.096893,157.907959 297.693542,162.466324 C300.696869,163.892899 301.248718,165.791046 301.070770,168.702209 C300.900116,171.494461 301.325348,173.883102 297.799805,175.518097 C287.260162,180.406006 276.979919,185.852646 266.586609,191.057602 C265.587341,191.558060 264.505859,191.894516 263.412079,192.327072 C261.814392,183.742737 261.883118,183.587860 268.735199,180.193695 C275.871643,176.658691 283.009827,173.127258 291.181396,169.082382 C288.103119,167.488556 285.745056,166.238113 283.360962,165.039536 C278.762634,162.727768 274.151886,160.440643 269.542114,158.151825 C262.307465,154.559769 262.305969,154.562759 263.156281,145.358612 C265.083221,146.276398 266.776520,147.082886 268.831055,148.036362 z"/>
			<path fill="currentColor" opacity="1.000000" stroke="none" 
				d="M363.772339,183.148376 C366.899017,182.784683 368.358063,183.574982 368.019623,186.616623 C367.803864,188.555649 367.979187,190.538193 367.979187,192.754532 C352.006195,192.754532 336.401611,192.754532 320.422119,192.754532 C320.422119,189.805099 320.422119,186.766861 320.422119,183.148254 C334.739838,183.148254 349.019318,183.148254 363.772339,183.148376 z"/>
		</svg>
	),
	logoAlt2: ({...props}) => (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="github"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 638 638"
			{...props}
		>
			<path fill="#020202"
				d="M43.998970,188.018097 C65.969978,143.460052 96.070671,106.007042 135.581711,76.365707 C171.111130,49.711388 210.619186,31.549105 254.034958,22.054203 C288.518768,14.512704 323.265259,12.913606 358.299164,17.652246 C425.908203,26.796967 484.357819,55.095055 532.851746,102.878426 C578.985840,148.336487 607.836670,203.337814 619.088440,267.313965 C628.190430,319.066925 624.251038,369.874664 607.019165,419.477020 C589.096252,471.068481 559.414307,514.832703 518.031372,550.604309 C477.869781,585.320190 431.693939,607.966980 379.818695,618.652344 C347.309601,625.348694 314.478119,626.474243 281.392456,622.386780 C235.474762,616.713928 193.183929,601.263000 154.347778,576.439270 C112.917976,549.957764 79.837708,515.272705 55.176899,472.694092 C31.688007,432.138855 18.300779,388.453186 14.859754,341.684204 C10.908513,287.980591 21.201653,237.013382 43.998970,188.018097 M438.063751,78.417900 C385.320251,53.033653 330.157959,44.399242 272.349854,54.820690 C205.307648,66.906830 150.233276,99.575165 108.197670,153.054810 C61.153889,212.906097 43.519821,281.364563 53.396381,356.576202 C59.102287,400.027649 74.684715,440.184448 101.187958,475.273712 C163.543015,557.829407 246.685822,595.309998 349.702606,584.787292 C418.864624,577.722595 477.003784,546.663147 521.965027,493.575287 C581.433044,423.358582 600.799011,342.232819 578.699219,253.069931 C559.123901,174.092499 511.112213,116.212440 438.063751,78.417900 z"/>
			<path fill="#F7F7F7" opacity="1.000000" stroke="none" 
				d="M438.384857,78.606979 C511.112213,116.212440 559.123901,174.092499 578.699219,253.069931 C600.799011,342.232819 581.433044,423.358582 521.965027,493.575287 C477.003784,546.663147 418.864624,577.722595 349.702606,584.787292 C246.685822,595.309998 163.543015,557.829407 101.187958,475.273712 C74.684715,440.184448 59.102287,400.027649 53.396381,356.576202 C43.519821,281.364563 61.153889,212.906097 108.197670,153.054810 C150.233276,99.575165 205.307648,66.906830 272.349854,54.820690 C330.157959,44.399242 385.320251,53.033653 438.384857,78.606979 M544.117126,448.560303 C576.080505,392.261780 585.947754,332.155731 573.627502,268.769592 C564.439575,221.498688 543.580872,179.515625 510.494232,144.395279 C448.116425,78.183395 371.140808,50.683716 281.098145,62.439838 C231.454468,68.921394 186.910873,89.125420 149.562378,122.730347 C72.798096,191.800278 44.758274,277.898102 66.444817,378.524628 C81.833298,449.927856 123.308609,504.633392 185.709061,542.135254 C246.370209,578.591797 312.164062,588.177063 380.981842,571.269043 C452.309082,553.744324 506.213562,512.171631 544.117126,448.560303 z"/>
			<path fill="#010101" opacity="1.000000" stroke="none" 
				d="M543.949158,448.886047 C506.213562,512.171631 452.309082,553.744324 380.981842,571.269043 C312.164062,588.177063 246.370209,578.591797 185.709061,542.135254 C123.308609,504.633392 81.833298,449.927856 66.444817,378.524628 C44.758274,277.898102 72.798096,191.800278 149.562378,122.730347 C186.910873,89.125420 231.454468,68.921394 281.098145,62.439838 C371.140808,50.683716 448.116425,78.183395 510.494232,144.395279 C543.580872,179.515625 564.439575,221.498688 573.627502,268.769592 C585.947754,332.155731 576.080505,392.261780 543.949158,448.886047 M254.532944,125.999855 C253.533295,125.999855 252.533661,125.999763 251.534012,125.999863 C243.651718,126.000641 243.651199,126.000656 243.651169,133.764908 C243.650986,173.420502 243.650650,213.076096 243.651489,252.731689 C243.651642,259.994080 243.654053,259.999023 250.661636,259.999237 C297.148651,260.000793 343.635681,260.000641 390.122711,259.999390 C396.698639,259.999207 396.720673,259.995087 396.721863,253.336365 C396.729095,212.847672 396.662903,172.358734 396.813812,131.870605 C396.830505,127.386475 395.756195,125.871063 390.986755,125.890465 C345.833466,126.074158 300.679077,125.999855 254.532944,125.999855 M149.037476,487.452850 C160.817764,500.543274 175.663391,508.151642 192.655914,512.035217 C211.784103,516.406799 231.043335,515.585205 250.287872,513.419861 C263.238983,511.962708 275.911285,509.011078 287.394226,502.542114 C306.417267,491.825378 314.746033,474.779572 315.681946,453.316345 C298.268799,453.316345 280.878632,453.316345 263.530273,453.316345 C261.298523,470.813934 249.578156,477.722168 237.236282,479.202454 C232.136993,479.814056 226.944260,480.172363 221.821594,479.964996 C206.327454,479.337738 193.858200,472.711548 187.170563,458.540863 C177.001358,436.993011 176.248047,414.863525 187.004868,393.125610 C191.274063,384.498169 198.303360,378.348694 207.384964,374.892120 C219.972427,370.101288 232.768906,369.923401 245.552200,374.000885 C253.630569,376.577698 259.230896,382.027588 262.282684,389.963745 C263.097504,392.082611 263.594940,394.323517 264.177277,396.301819 C281.248474,396.301819 297.877899,396.301819 314.912842,396.301819 C314.469604,392.440155 314.330719,388.769562 313.595154,385.222717 C308.937866,362.766388 293.788879,349.762085 273.163208,343.105194 C241.955292,333.032959 210.344559,333.924438 179.406601,344.263733 C160.036880,350.737000 145.617279,363.718781 137.056061,382.768616 C129.016525,400.657654 127.714531,419.469269 129.466537,438.534302 C131.106506,456.380280 136.326080,473.110596 149.037476,487.452850 M396.830475,420.499939 C396.830475,450.447601 396.830475,480.395264 396.830475,510.499207 C413.418243,510.499207 429.617371,510.499207 446.221497,510.499207 C446.221497,465.430908 446.221497,420.696838 446.221497,375.541138 C468.180634,375.541138 489.733887,375.541138 511.262604,375.541138 C511.262604,363.841644 511.262604,352.569397 511.262604,341.327881 C451.147339,341.327881 391.279694,341.327881 331.366486,341.327881 C331.366486,352.916565 331.366486,364.174805 331.366486,376.004944 C353.246643,376.004944 374.932770,376.004944 396.830475,376.004944 C396.830475,390.885010 396.830475,405.192444 396.830475,420.499939 z"/>
			<path fill="#F9CB15" opacity="1.000000" stroke="none" 
				d="M255.028992,125.999855 C300.679077,125.999855 345.833466,126.074158 390.986755,125.890465 C395.756195,125.871063 396.830505,127.386475 396.813812,131.870605 C396.662903,172.358734 396.729095,212.847672 396.721863,253.336365 C396.720673,259.995087 396.698639,259.999207 390.122711,259.999390 C343.635681,260.000641 297.148651,260.000793 250.661636,259.999237 C243.654053,259.999023 243.651642,259.994080 243.651489,252.731689 C243.650650,213.076096 243.650986,173.420502 243.651169,133.764908 C243.651199,126.000656 243.651718,126.000641 251.534012,125.999863 C252.533661,125.999763 253.533295,125.999855 255.028992,125.999855 M268.469788,147.889389 C266.776520,147.082886 265.083221,146.276398 263.156281,145.358612 C262.305969,154.562759 262.307465,154.559769 269.542114,158.151825 C274.151886,160.440643 278.762634,162.727768 283.360962,165.039536 C285.745056,166.238113 288.103119,167.488556 291.181396,169.082382 C283.009827,173.127258 275.871643,176.658691 268.735199,180.193695 C261.883118,183.587860 261.814392,183.742737 263.412079,192.327072 C264.505859,191.894516 265.587341,191.558060 266.586609,191.057602 C276.979919,185.852646 287.260162,180.406006 297.799805,175.518097 C301.325348,173.883102 300.900116,171.494461 301.070770,168.702209 C301.248718,165.791046 300.696869,163.892899 297.693542,162.466324 C288.096893,157.907959 278.679138,152.972931 268.469788,147.889389 M363.298798,183.148254 C349.019318,183.148254 334.739838,183.148254 320.422119,183.148254 C320.422119,186.766861 320.422119,189.805099 320.422119,192.754532 C336.401611,192.754532 352.006195,192.754532 367.979187,192.754532 C367.979187,190.538193 367.803864,188.555649 368.019623,186.616623 C368.358063,183.574982 366.899017,182.784683 363.298798,183.148254 z"/>
			<path fill="#FDFDFD" opacity="1.000000" stroke="none" 
				d="M148.810425,487.179260 C136.326080,473.110596 131.106506,456.380280 129.466537,438.534302 C127.714531,419.469269 129.016525,400.657654 137.056061,382.768616 C145.617279,363.718781 160.036880,350.737000 179.406601,344.263733 C210.344559,333.924438 241.955292,333.032959 273.163208,343.105194 C293.788879,349.762085 308.937866,362.766388 313.595154,385.222717 C314.330719,388.769562 314.469604,392.440155 314.912842,396.301819 C297.877899,396.301819 281.248474,396.301819 264.177277,396.301819 C263.594940,394.323517 263.097504,392.082611 262.282684,389.963745 C259.230896,382.027588 253.630569,376.577698 245.552200,374.000885 C232.768906,369.923401 219.972427,370.101288 207.384964,374.892120 C198.303360,378.348694 191.274063,384.498169 187.004868,393.125610 C176.248047,414.863525 177.001358,436.993011 187.170563,458.540863 C193.858200,472.711548 206.327454,479.337738 221.821594,479.964996 C226.944260,480.172363 232.136993,479.814056 237.236282,479.202454 C249.578156,477.722168 261.298523,470.813934 263.530273,453.316345 C280.878632,453.316345 298.268799,453.316345 315.681946,453.316345 C314.746033,474.779572 306.417267,491.825378 287.394226,502.542114 C275.911285,509.011078 263.238983,511.962708 250.287872,513.419861 C231.043335,515.585205 211.784103,516.406799 192.655914,512.035217 C175.663391,508.151642 160.817764,500.543274 148.810425,487.179260 z"/>
			<path fill="#FEFEFE" opacity="1.000000" stroke="none" 
				d="M396.830475,419.999908 C396.830475,405.192444 396.830475,390.885010 396.830475,376.004944 C374.932770,376.004944 353.246643,376.004944 331.366486,376.004944 C331.366486,364.174805 331.366486,352.916565 331.366486,341.327881 C391.279694,341.327881 451.147339,341.327881 511.262604,341.327881 C511.262604,352.569397 511.262604,363.841644 511.262604,375.541138 C489.733887,375.541138 468.180634,375.541138 446.221497,375.541138 C446.221497,420.696838 446.221497,465.430908 446.221497,510.499207 C429.617371,510.499207 413.418243,510.499207 396.830475,510.499207 C396.830475,480.395264 396.830475,450.447601 396.830475,419.999908 z"/>
			<path fill="#0A0801" opacity="1.000000" stroke="none" 
				d="M268.831055,148.036362 C278.679138,152.972931 288.096893,157.907959 297.693542,162.466324 C300.696869,163.892899 301.248718,165.791046 301.070770,168.702209 C300.900116,171.494461 301.325348,173.883102 297.799805,175.518097 C287.260162,180.406006 276.979919,185.852646 266.586609,191.057602 C265.587341,191.558060 264.505859,191.894516 263.412079,192.327072 C261.814392,183.742737 261.883118,183.587860 268.735199,180.193695 C275.871643,176.658691 283.009827,173.127258 291.181396,169.082382 C288.103119,167.488556 285.745056,166.238113 283.360962,165.039536 C278.762634,162.727768 274.151886,160.440643 269.542114,158.151825 C262.307465,154.559769 262.305969,154.562759 263.156281,145.358612 C265.083221,146.276398 266.776520,147.082886 268.831055,148.036362 z"/>
			<path fill="#070601" opacity="1.000000" stroke="none" 
				d="M363.772339,183.148376 C366.899017,182.784683 368.358063,183.574982 368.019623,186.616623 C367.803864,188.555649 367.979187,190.538193 367.979187,192.754532 C352.006195,192.754532 336.401611,192.754532 320.422119,192.754532 C320.422119,189.805099 320.422119,186.766861 320.422119,183.148254 C334.739838,183.148254 349.019318,183.148254 363.772339,183.148376 z"/>
		</svg>
	),
	rss: Rss,
	login: LogIn,
	arrow: ArrowRight,
	linkedIn: Linkedin,
	github: ({...props}) => (
		<svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
	)
};