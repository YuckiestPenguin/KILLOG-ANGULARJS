var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/projectLogistics', {
            templateUrl: 'pages/projectLogistics.html',
            controller: 'projectLogisticsController'
        })
        .when('/mobilizations', {
            templateUrl: 'pages/mobilizations.html',
            controller: 'mobilizationsController'
        })
        .when('/supplyChain', {
            templateUrl: 'pages/supplyChain.html',
            controller: 'supplyChainController'
        });

});

myApp.controller('mainController', function($scope) {
    $scope.title = 'Kinetix International Logistics',
        $scope.motto = 'The Power of Moving Forward',
        $scope.message = "Kinetix International is an experienced project logistics and global mobility company with core competencies in the areas of Domestic & International Household Goods Moving, Cargo & Logistics Sourcing and Corporate Relocation Management.",
        $scope.services = {
            text: ['Project Logistics & Specialized Commodities', 'Household Goods & Mobilizations', 'Domestic & International Supply Chain Operations']
        };



});

// START OF PROJECT LOGISTICS
// This array contains all of the features in services provided.
var projectLogisticsFeatures = [{
    name: 'Route Studies and Consultation',
    definition: 'Route studies are probably the most critical aspect of the logistics process but are rarely implemented by our competition. Kinetix International Logistics routinely deploys logistics managers to your project destination to accurately survey transportation infrastructures, host country regulations and the best local agents. It’s this thorough understanding of the logistics environment that allows our staff of experienced professionals to develop a transportation plan with cargo speed, safety and cost effectiveness in mind.'
}, {
    name: 'Rapid Quote Response',
    definition: 'Kinetix International Logistics realizes that your time is valuable and should not be spent on delayed procurement cycles. It is our goal to insure that you receive an accurate and timely quote response from us within 24 hours of your request. You will be proactively notified should additional time be needed for larger or more complex quote requests.'
}, {
    name: 'Expediting Purchase Orders with Vendors',
    definition: 'Our turnkey approach to logistics services starts the moment you send the purchase order to the manufacturer. Kinetix International Logistics initiates full control of your supply chain by actively engaging with your vendors to determine expected purchase order completion and creating a transportation plan based on the production schedules. This process provides our clients with critical information for decision making that mitigates project downtime at destination.'
}, {
    name: 'Export Compliance',
    definition: 'Kinetix International Logistics serves as a valuable and knowledgeable partner to our clients to ensure that exports and exporting procedures are consistent with US government regulations. Kinetix staff is IATA (air), IMDG (ocean) and 49 CFR (ground) transportation compliant and registered with the US State Department as a licensed Defense Trade Logistics Provider. We maintain strict compliance with rules and regulations set forth by various US government agencies that are applicable to ITAR and OFAC and will insure that no item will be exported prior to confirming if an export license is required.'
}, {
    name: 'Receiving, Inspection and Warehousing',
    definition: 'Kinetix International Logistics utilizes a unique manual and computerized warehouse receiving and inspection process that insures that all cargo and receivables are accounted for and properly prepared for export. Cargo delivered to a Kinetix warehouse is meticulously inspected for damage, shortage or US government acquisition compliance and assigned a receiver number that identifies commodity description, lot number, carton quantity and manufacturer. It is then electronically stored in our material management database (Odyssey) and compared for discrepancies to the client purchase order by our experienced logistics professionals.' + ' After the receiving and inspection procedure has been completed, the cargo is loaded onto pallets per the receipt number. All cargo is shrink-wrapped and placed into racked storage. Each pallet will be clearly marked with the receiver number and client name. This dual system ensures a precise, fail safe method to keep an accurate inventory of client commodities prior to exporting.'
}, {
    name: 'Export Packing and Crating',
    definition: 'Kinetix International Logistics is adept at minimizing damages to freight while in transit. Depending on cargo type, Kinetix provides customized packaging ranging from shrink wrapping to full export crating. Our extensive experience in shipping cargo to developing countries affords us with an understanding of the conditions freight can be exposed to during transit and how to export pack the cargo so that it will be delivered securely. Air shipments are packed in wooden crates or tri-wall containers to ensure cargo integrity and for easy handling. Ocean shipments can be custom crated as necessary right on the premises. All dangerous and hazardous goods are dispatched by our warehouse staff to a licensed hazardous materials packer for proper containerization prior to export.'
}, {
    name: 'Freight Forwarding',
    definition: 'Kinetix International Logistics utilizes all modes of transportation to move your cargo including rail, truck, ocean going vessel, barge and aircraft. We are an FMC licensed OTI (ocean transportation intermediary) with extensive past performance in the transport of full container loads (FCL), less than container loads (LCL), less than truck loads (LTL) and trailer loads (TL). We are also a TSA certified indirect air carrier that provides air freight services including air charters, regular break bulk, rolling stock and oversize break bulk.' + ' Our highly trained staff, advanced IT capability and communication links to agents throughout the world allows us to plan, coordinate, transport, clear and deliver any kind of shipment to any destination. Our global reach is fully complemented by an advanced shipment management system that prepares documents, coordinates shipments and tracks and reports every shipment.'
}, {
    name: 'Reporting and Tracking',
    definition: 'Kinetix International Logistics is the industry leader in providing precise, real-time reporting and tracking information to support your project management needs. We utilize highly trained logistics professionals and an expandable, state of the art, computerized cargo tracking system called Odyssey. Odyssey is a Windows based client/server system that traces purchase order line and sub line items through receiving, export packing and forwarding to final delivery. Odyssey creates all necessary shipping documentation and prepares reports for our clients so that they can follow an individual purchase order component through each stage of its transport to the final destination.' + ' For high value or sensitive shipments requiring advanced tracking capability, Kinetix offers continuous, real time visibility to your assets via the installation of a tracking device that uses Iridium, GPS, RFID and other wireless sensors to pinpoint its location via Google Earth mapping.'
}, {
    name: 'Vessels and Aircraft Chartering',
    definition: 'In addition to transporting cargo on commercial aircraft and ocean vessels, Kinetix International Logistics has extensive experience in part-charter and full charter options for both air and ocean shipments. Chartering is an effective method for delivering high volume, oversize or out of gauge cargo and we will even utilize it to circumvent risk and delays over dangerous overland routes. We routinely by-pass the charter brokers and negotiate directly with the carriers so as achieve a better service at more competitive rate.'
}, {
    name: 'Hazmat Transportation',
    definition: 'Shipments of hazardous material moving through and exporting from the United States need to comply with a variety of regulations set forth by multiple governing bodies (DOT, IATA, and IMO). Kinetix International Logistics’ staff are regularly trained and certified to ensure compliance and maintain relationships with worldwide carriers capable of packing, transporting and delivering sensitive commodities. From Explosives to Radioactive Material to Toxic and Infectious Substances, Kinetix has shipped it all.'
}, {
    name: 'FMS Transportation',
    definition: 'Kinetix International Logistics has the worldwide capability and know-how to support the US Government and commercial entities with their licensed FMS shipments. Our logistics professionals have first-hand experience handling, tracking and record-keeping for cargo exporting under DSP-5 and DSP-94 export licenses and are proficient in DDTC’s documentation requirements. When exporting licensable materials, Kinetix will serve as your compliance, safety and transporting specialist.'
}, {
    name: 'Customs Clearance',
    definition: 'Kinetix International Logistics is recognized as an industry leader in the rapid and accurate custom clearances of duty exempt project cargo shipments worldwide, which results in increased productivity and reduced project down time. Our team of specialists emphasizes accurate detail in the preparation of export documentation and effective communication with government agencies worldwide. Frequent travel to host countries and meetings with local customs officials and agents provide Kinetix with an exceptional understanding of each country’s customs processes.'
}, {
    name: 'Last Mile Delivery',
    definition: 'Kinetix International Logistics has the breath and experience to operate in environments that discourage risk adverse logistics companies. Our company culture of intelligent risk mitigation and thinking outside the box provides our clients with world class service to some of the most remote and hostile areas in the world. We will work right alongside your outside the wire project staff to perform deliveries that others would think impossible.'
}, {
    name: 'Insurance',
    definition: 'Kinetix International Logistics maintains extraordinarily low claims ratios given the difficulty of the destinations we ship to. This is a testament to our successful integration of planning, packing and tracking the shipments. Our consistently low claims ratios gives us the ability to offer our clients comprehensive all risk transit insurance at incredibly low rates, and when a claim is filed, it will be handled congenially and in the best interests of our client by a Kinetix logistics professional.'
}];


myApp.controller('projectLogisticsController', function($scope) {
    $scope.message = 'Kinetix International Logistics Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries.',
        $scope.services = {
            text: ['Route Studies and Consultation', 'Export Compliance', 'Receiving, Inspection, and Warehousing', 'Freight Forwarding', 'Reporting and Tracking System', 'Last Mile Delivery']
        },
        $scope.features = projectLogisticsFeatures,
                $scope.serviceIntroduction = 'As a non-asset based 3PL, Kinetix International Logistics provides a proficient and comprehensive set of integrated services that leverage our unique expertise and customer service and complement our customers fixed and contingency requirements.',
                $scope.introductions = {
                    text: ['Kinetix International Logistics’ Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries. Kinetix has an exceptional ability to manage complex logistics projects that incorporate global, single source accountability for expediting, warehousing, materials management, export compliance, freight management, customs clearance and last mile deliveries to primarily developing countries and austere environments.', 'Kinetix International Logistics has handled numerous FAR and ITAR-compliant freight forwarding and logistics contracts encompassing the supply chain management of multiple commodities and multiple vendors to locations as diverse as Afghanistan, Iraq, South Sudan, Haiti, Pakistan and many others. Our considerable travel and first-hand experience in developing countries gives us the ability to respond to volatile changes in political climates, host government regulations and seasonal conditions that impact logistical efficiency.', 'Our success with providing logistics solutions on both large and small scale projects is credited to our unique, integrated project management structure. Kinetix International Logistics combines financial strength, institutional knowledge, advanced IT support, proactive communication and a company culture of “thinking outside the box” to provide our clients with a level of service that is assumed to be unattainable by our competition and translates into significant cost and time savings for our clients.']
                };
});

// END OF PROJECT Logistics

// START OF MOBILIZATIONS

// This is for the Consultation & Financial Services features
var mobilizationsFeatures1 = [{
    name: 'Move Policy Review, Design & Construction',
    definition: 'Kinetix International understands that they key foundation for both a service and cost effective household goods move program is a clear and precise corporate policy. In order that Kinetix can deliver Best in Class service, it is imperative that we understand a corporation’s culture, their goals and objectives from both an employee and strategic business perspective, and their requirements for complete accountability. By operating within this formula for execution, Kinetix is prepared to adhere to the guidelines of a finely tuned policy, or assist our valued clients in the design and development of a unique and custom built management tool. Our account management team has vast knowledge of moving & storage practices both domestically and international, and is prepared to support our valued clients in creating a sound and competitive policy.'
}, {
    name: 'Custom Management Reporting',
    definition: 'Kinetix International understands that information sharing is a vital tool that corporations utilize to track their employees move activity, view cost control data, and measure the key performance indicators against end service results. Through Odyssey, our proprietary information management system, our clients not only received periodic custom reporting, but can view live information on line through a password protected web portal.'
}];
//
// // This is for the Domestic Services Portfolio features
var mobilizationsFeatures2 = [{
    name: 'Independent Agent/Van Line Selection',
    definition: 'Kinetix International utilizes an independent network of pre-qualified agents regardless of van line affiliation. The agents we employ to perform pack, load and delivery services are measured through a series of key performance indicators which are reviewed quarterly in order to maintain successful service consistency. Traditional domestic van lines contracts limit the selection of agents without complete objectivity, while Kinetix is able to focus solely on the performance strengths of our service partners when assigning business.'
}, {
    name: 'Pre-Move Surveys',
    definition: 'Every Kinetix International household goods moves requires that we perform a pre-move survey in order to ensure that policy, move requirements and cost accuracy are defined at the onset of the process. The survey results are inspected to further ensure that the proper labor team is provided, all necessary packing materials are available, enough van space is reserved, and realistic service dates for pack, load and delivery are committed. Proper tariff application and post-move invoice auditing begin with the pre-move survey.'
}, {
    name: 'Small Shipment Program',
    definition: 'New hires and single corporate transferees often have fewer possessions than families with full size homes, etc. Kinetix has designed a “small shipment program” which reduces the range of service delivery dates, while further reducing the cost of the move and extended temporary living requirements often caused by smaller shipments.'
}, {
    name: 'Storage Management',
    definition: 'Kinetix International understands there is occasionally a the need for storage of personal effects when service requirements mandate, so Kinetix has negotiated favorable storage rates in state of art facilities in every state. Kinetix ensures that the assigned warehousing and labor at pre-qualified facilities meet defined standards in order to maintain the safety and integrity of the transferee’s possessions.'
}, {
    name: 'Risk Management & Claims Resolution',
    definition: 'Protecting the personal possessions of the transferees we move is paramount to Kinetix. We maintain a finely tuned risk management program to ensure the maximum full replacement coverage is in place prior to any servicing. In the rare occurrence that a Kinetix placed move results in loss or damage, we provide a transferee friendly and rapid claims process in order to ensure that employee productivity is not hindered due a lengthy settlement process. Claims occurrence ratios and settlement times are key performance indicators in awarding business to our service partners.'
}, {
    name: 'Internal Pre-Invoice Auditing',
    definition: 'Cost accuracy is vital to the proper planning and management of all successful relocation programs. Kinetix International provides an invoice auditing process that actually begins with the pre-move survey and is completed upon the delivery and termination of all service requirements. Our team of specialists audits each carrier invoice for policy adherence, estimate accuracy, exceptions approval, risk management, tariff application and bottom-line accuracy. Our valued clients know that Kinetix is fully accountable for invoice accuracy and cost sensitivity.'
}];

var mobilizationsFeatures3 = [{
    name: 'Independent Network of Agents',
    definition: 'Kinetix International utilizes an independent network of pre-qualified international origin and destination agents regardless of van line or industry affiliation. The international agents we employ to perform export pack, load, transportation and delivery services are measured through a series of key performance indicators which are reviewed quarterly in order to maintain satisfactory service consistency. The Kinetix operation’s charter avoids business relationships built on reciprocity, which has been a traditional yet not client advantageous process for years.'
}, {
    name: 'Expertise in Developing Countries',
    definition: 'Kinetix International specializes in providing world class international moving services for growth corporations, and US Government Agencies and their contractors operating in developing companies. Our institutional knowledge of the Federal Acquisition Regulations (FAR), global transportation infrastructures and country specific customs procedures positions us as one of the most unique moving providers for the international development community. Our past performance of operating in complex environments for USAID, the Peace Corps and the US Department of State provides our clients with confidence in our abilities in this unique market.'
}, {
    name: 'Pre-Move Surveys',
    definition: 'Every Kinetix International household goods move requires that we perform a pre-move survey in order to ensure that policy, move requirements and cost accuracy are defined at the onset of the process. The survey results are inspected to further ensure that the proper labor team is provided, all necessary export packing materials are available, shipment size is documented and realistic service and transit dates are committed. Competitive pricing and the post-move audit process begins with the pre-move survey.'
}, {
    name: 'Rapid Quote Response',
    definition: 'Kinetix International understands that our clients’ time is valuable and should not be hindered by delayed procurement cycles. Kinetix commits to ensure that an accurate and timely quote response will be delivered within 24 hours of request. We will notify our clients should additional response time be required for larger or more complex quote requests.'
}, {
    name: 'Door-to-Door Services',
    definition: 'International moving services are planned using a door-to-door timeline. Kinetix International assumes the responsibility as client advocate to ensure that all providers employed deliver their specialty services in the most satisfactory, complete and cost effective manner available. Kinetix oversees each phase of this process and works “directly” with all specialists in order to provide a seamless and effective move. Our expert Transportation Counselors work both individually with each provider, while coordinating the process to meet their committed timeline. Further, Kinetix negotiates each phase of the door-to-door process to deliver a competitive bottom-line.'
}, {
    name: 'Expert Export Wrapping',
    definition: 'Every Kinetix International origin services crew is trained specifically for international packing, export wrapping and loading. The vast majority of our agents are also FIDI, FAIM and RIM certified. At the transferee’s residence, the origin crew will perform their tasks as the transferee observes in order to maintain confidence and satisfaction. All furniture and fragile items will be wrapped with bubble plastic or paper padding as required. Special crates and export packing materials will be constructed for fragile and oversized items.'
}, {
    name: 'Licensed Ocean & Freight Forwarding',
    definition: 'Kinetix International is a TSA certified Indirect Air Carrier and FMC licensed Ocean Transportation Intermediary that negotiates and manages household goods moving services worldwide. Our team of highly trained specialists coordinates the door- to – door management of both service delivery and communications. Kinetix defines a custom transportation plan for each shipment with emphasis on transit time, cost effectiveness, risk management and shipment integrity through to completion. When handling shipments to developing countries, Kinetix maintains a contingency plan should geographic conditions dictate change. Kinetix regularly monitors the shipment from door- to – door to ensure the timely and safe arrival of the transferee’s personal effects.'
}, {
    name: 'Customs Clearance',
    definition: 'Kinetix International is recognized as an industry leader in the rapid and accurate custom clearances of household goods moves worldwide, which results in our client employee’s timely return to business productivity in the host country. Our team of specialists emphasizes accurate detail in the preparation of export documentation and effective communication with government agencies worldwide. Frequent travel to host countries and meetings with local customs officials and agents provide Kinetix with an exceptional understanding each country’s customs processes.'
}, {
    name: 'Permanent Storage Management',
    definition: 'Storage of personal effects is a customary requirement for international transferees. Kinetix maintains a permanent storage control program that ensures for the safety of the possessions while in storage and the integrity of the shipment upon delivery out, once the overseas assignment is complete. Kinetix has negotiated favorable storage rates with our worldwide partners, and seeks state of art facilities when assigning storage. Kinetix ensures that the assigned warehousing meets defined standards set forth by Kinetix as available.'
}, {
    name: 'Risk Management & Claims Resolutions',
    definition: 'Protecting the personal possessions of the transferees we move is paramount to Kinetix. We maintain a finely tuned risk management program to ensure the maximum full replacement coverage is in place for both the transportation and storage alike.Our Transportation Counselors are well versed in assisting transferees in determining the value of their personal effects and how to complete valued inventory documents for insurance protection. In the rare occurrence that a Kinetix placed moved results in loss or damage, we provide a transferee friendly and rapid claims process in order to ensure that employee productivity is not hindered due to a lengthy settlement process. Claims occurrence ratios and settlement times are key performance indicators in awarding business to our service partners.'
}, {
    name: 'Internal Pre-Invoice Auditing',
    definition: 'Cost accuracy is vital to the proper planning and management of all successful international relocation programs. Kinetix International provides an invoice auditing process that actually begins with the pre-move survey and is completed upon the delivery and termination of all service requirements. International moving is unique in that there is no universal tariff which dictates the maximum cost of all move related services. Kinetix negotiates favorable rates for all origin, transportation and destination services with pre-qualified service providers world-wide. Our team of specialists audits each service invoice for policy adherence, estimate accuracy, risk management, compliance with international rates and bottom-line accuracy. Our valued clients know that Kinetix is fully accountable for invoice accuracy and cost sensitivity.'
}];
myApp.controller('mobilizationsController', function($scope) {
    $scope.message = 'Kinetix International Logistics’ Household Goods Management Division specializes in the design and delivery of innovative transportation programs for Fortune 500 and emerging growth corporations, NGO’s and governmental agencies and third party relocation management companies worldwide.',
        $scope.services = {
            text: ['Policy Consultation', 'Global Origin and Destination Services', 'Household Goods Transport', 'Customs Reporting']
        },
        $scope.introductions = {text: [
          'Kinetix International Logistics’ Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries. Kinetix has an exceptional ability to manage complex logistics projects that incorporate global, single source accountability for expediting, warehousing, materials management, export compliance, freight management, customs clearance and last mile deliveries to primarily developing countries and austere environments.','Kinetix International Logistics has handled numerous FAR and ITAR-compliant freight forwarding and logistics contracts encompassing the supply chain management of multiple commodities and multiple vendors to locations as diverse as Afghanistan, Iraq, South Sudan, Haiti, Pakistan and many others. Our considerable travel and first-hand experience in developing countries gives us the ability to respond to volatile changes in political climates, host government regulations and seasonal conditions that impact logistical efficiency.','Our success with providing logistics solutions on both large and small scale projects is credited to our unique, integrated project management structure. Kinetix International Logistics combines financial strength, institutional knowledge, advanced IT support, proactive communication and a company culture of “thinking outside the box” to provide our clients with a level of service that is assumed to be unattainable by our competition and translates into significant cost and time savings for our clients.'
        ]},
        $scope.serviceIntroduction = 'Kinetix International Logistics provides household goods management programs that deliver services which are specific to a family’s individual needs. Our flexible domestic and international programs are driven by guidelines set forth by each client and supported by a team of the most seasoned industry specialists. We have partnered with a worldwide network of independent, pre-qualified agents to deliver exceptional service at reasonable cost. Providing single source accountability helps our clients evaluate their return on investment in Kinetix by utilizing the most current technology to provide customized management reporting.',
        $scope.features1 = mobilizationsFeatures1,
        $scope.features2 = mobilizationsFeatures2,
        $scope.features3 = mobilizationsFeatures3;
});

// END OF MOBILIZATIONS

myApp.controller('supplyChainController', function($scope) {
    $scope.message = 'Let our logistics team be your supply chain one-stop-shop; pre-planning, scheduling, managing carriers, equipment, warehousing, delivery notification, inventory tracking, 3rd party coordination, set-up, installation, tear-down, disposal, distribution, and single billing source – for all your cargo moving locally, long distance or internationally.',
        $scope.services = {
            text: ['Nationwide Inventory Management', 'International Commodities', 'LTL and FTL Shipments', 'Trade Show']
        };
});
