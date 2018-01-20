$(function () {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");

    var suspicion = 0;
    var hastools = false;
    var replied = false;

    function restart() {
        suspicion = 0;
        hastools = false;
        replied = false;
        $("#storyText").text("It is the year 2117, 100 years after the last net neutrality incident, and you are an employee of internet giant Comcast, which is mysteriously still going strong after more than 100 years. You work in one of Comcast's biggest service areas, Kansastown, in the state of Kentuckie. Recently, Comcast \"achieved\" a total monopoly in that area, which means a whole lot more work for you, who has to service all of the internet lines. Now, you are on your way to set up Internet access at a new location being built across town from Comcast's headquarters there.");
        $(".storyButton").text("Continue");
        $(".storyButton").on("click", scene2);
    }

    function putDeath1() {
        $("#storyText").html("You curl into a ball and refuse to move. Soon, the door is broken down by Comcast\'s guards and you are taken to their world headquarters in Comcast Town. NICOLINET intercepts the drone you are being taken in during its flight, but it crashes and you are killed. Having been exposed, NICOLINET is taken down by Comcast, and then Comcast repeals net neutrality once and for all.");
        $(".storyButton").text("Restart");
        $(".storyButton").on("click", restart);
    }

    function mercyDeath() {
        $("#storyText").html("Unfortunately, Comcast has no patience for people like you and take you to their world headquarters in Comcast Town. There, Comcast tortures information out of you and does the same to NICOLINET. With nothing standing in their way, Comcast proceeds to become the world\'s largest Internet Service Provider, and then uses their influence to repeal net neutrality. Now everyone in the world must be subject to Comcast\'s excessive internet rates.");
        $(".storyButton").text("Restart");
        $(".storyButton").on("click", restart);
    }

    function promoteDeath() {
        $("#storyText").html("After telling Comcast, you are promoted to be on Comcast\'s board of directors. While you become a highly paid buisinessman with enough money to pay for neutral internet access, the rest of society suffers because of your decision. One night, a large group of people gathers, all fed up with you turning your back on them. They form a mob and burn down your mansion, first class real-estate in the luxurious state of Pennsyltucky. You are killed in the fire, and everyone in the mob is arrested. Nobody is happy anymore.");
        $(".storyButton").text("Restart");
        $(".storyButton").on("click", restart);
    }

    function supportDeath() {
        $("#storyText").html("You spend the rest of your life trying to reach someone on Comcast\'s customer support; meanwhile, Comcast repeals net neutrality once and for all.");
        $(".storyButton").text("Restart");
        $(".storyButton").on("click", restart);
    }

    function flightDeath() {
        $("#storyText").html("The drone crashes and you die. Without your help, Comcast proceeds to squash all hopes of net neutrality, and uses its leverage over internet access to destroy life as we know it.");
        $(".storyButton").text("Restart");
        $(".storyButton").on("click", restart);
    }

    function run1() {
        if (replied = false) {
            $("#storyText").html("You run away from Comcast\'s guards that are quickly closing in on you. One of them sees you; however, and they chase after you. Running for your life, you quickly duck into an alleyway in hopes that Comcast\'s guards won\'t find you there. Fortunately, it seems to have worked. You check your email on your phone and find another message from NICOLINET. This one asks you one more time if you would like to help them, and provides an address to meet up at. You decide to:");
            $("#button1").text("Tell Comcast about the message and help them stop NICOLINET");
            $("#button2").text("Meet up with NICOLINET");
            $("#button3").text("Ignore the message");
            $("#button4").text("Reply to NICOLINET asking them for more information");
            $("#button1").on("click", promoteDeath);
            $("#button2").on("click", restart);
            $("#button3").on("click", restart);
            $("#button4").on("click", restart);
        } else {
            $("#storyText").html("You run away from Comcast\'s guards that are quickly closing in on you. One of them sees you; however, and they chase after you. Running for your life, you quickly duck into an alleyway in hopes that Comcast\'s guards won\'t find you there. Fortunately, it seems to have worked. Your phone begins to vibrate in your pocket, and you quickly stop it in case any Comcast guards heard it. You look at your phone, and find a transmission from NICOLINET. <br> <br> \"Dear Mr. Scott, <br> Thank you for cantacting us with some information. We would like you to meet up with us at the time and place in the attached document. Bring any evidence you have to the meeting. We hope to see you soon.\"<br> <br> After reading the note, you decide to:");
            $("#button1").text("Tell Comcast about the message and help them stop NICOLINET");
            $("#button2").text("Meet up with NICOLINET");
            $("#button3").text("Ask NICOLINET if they can come to you");
            $("#button4").text("Ignore the message and try to figure things out on your own.");
            $("#button1").on("click", promoteDeath);
            $("#button2").on("click", restart);
            $("#button3").on("click", restart);
            $("#button4").on("click", restart);
        }
    }

    function hide1() {
        if (replied = false) {
            if (hastools = true) {
                $("#storyText").html("You gather your belongings and shut yourself in a closet nearby in the building. Suddenly, you hear a person (likely a Comcast employee) walk by. <br> \"He\'s in here,\" the guard says. The door bursts open and you are caught red-handed. Using the stolen computer as a tracking device, Comcast found your hiding spot, and locked you inside of their world headquarters in Comcast Town for the rest of your life. Without your help, NICOLINET was crushed by the corporate power of Comcast, and no one was left to resist Comcast when they finally excercised their full power and repealed net neutrality.");
                $(".storyButton").text("Restart");
                $(".storyButton").on("click", restart);
            } else {
                $("#storyText").html("You gather your belongings and shut yourself in a closet nearby in the building. Suddenly, you hear a person (likely a Comcast employee) walk by. <br> \"He\'s in here,\" the guard says. The door bursts open and you are caught red-handed. It turns out that Comcast intercepted the email from NICOLINET and began to suspect you of plotting against them. Using your computer as a tracking device, Comcast found your hiding spot, and locked you inside of their world headquarters in Comcast Town for the rest of your life. Without your help, NICOLINET was crushed by the corporate power of Comcast, and no one was left to resist Comcast when they finally excercised their full power and repealed net neutrality.");
                $(".storyButton").text("Restart");
                $(".storyButton").on("click", restart);
            }
        } else {
            $("#storyText").html("You gather your belongings and shut yourself in a closet nearby in the building. Suddenly, you hear a person (likely a Comcast employee) walk by. <br> A light begins to grow from the wall behind you; meanwhile, you hear the person outside the door say, \"He\'s in here.\" You find a lock on the doorknob and lock it to try and give yourself more time to try and contact NICOLINET for help. But, you don\'t know what to do about the growing light from behind you. All of a sudden, the wall behind you collapses. There is a small group of people dressed all in black outside the wall, one of them holding a laser. <br> \"Come with us,\" one of them says. With the Comcast guards outside the door attempting to break it down, you decide to:");
            $("#button1").text("Run");
            $("#button2").text("Go with the group of people that broke down the wall");
            $("#button3").text("Stay Put");
            $("#button4").text("Attempt to sell the group of people your computer equipment in exchange for them not hurting you");
            $("#button1").on("click", restart);
            $("#button2").on("click", mercyDeath);
            $("#button3").on("click", putDeath1);
            $("#button4").on("click", promoteDeath);
        }
    }

    function passive1() {
        if (hastools = true) {
            $("#storyText").html("You finish setting up the Internet access in this new location and decide to do some digging. You\'re not sure if you believe the claims of NICOLINET, but you definitely have noticed some suspicious activity. You decide to research about Comcast\'s history of suspicious activity. You see a link about net neutrality being repealed, but you suddenly realize. Comcast\'s monopoly on the internet access means that they surely saw your searches about their past acivity. Even worse, they probably noticed that these were coming from a stolen computer. Suddenly, you notice a large drone descending from above. Surely Comcast could\'nt have come that quickly! With Comcast quickly closing in, you choose to:");
            $("#button1").text("Run");
            $("#button2").text("Attempt to trade your stolen items in exchange for your freedom");
            $("#button3").text("Hide");
            $("#button4").text("Surrender all of your information, and use your correspondence with NICOLINET to capture them");
            $("#button1").on("click", restart);
            $("#button2").on("click", mercyDeath);
            $("#button3").on("click", hide1);
            $("#button4").on("click", promoteDeath);
        } else {
            $("#storyText").html("You finish setting up the Internet access in this new location and decide to do some digging. You\'re not sure if you believe the claims of NICOLINET, but you definitely have noticed some suspicious activity. You decide to research about Comcast\'s history of suspicious activity. You see a link about net neutrality being repealed, but you suddenly realize. Comcast has a monopoly on the Internet in this area. Your searches must have gone through Comcast\'s servers, and with all of this unusual activity going on, there\'s no doubt that they read it. Suddenly, you notice a large drone descending from above. Surely Comcast could\'nt have come that quickly! With Comcast quickly closing in, you choose to:");
            $("#button1").text("Run");
            $("#button2").text("Attempt to hijack the drone and escape");
            $("#button3").text("Hide");
            $("#button4").text("Surrender all of your information, and use your correspondence with NICOLINET to capture them");
            $("#button1").on("click", restart);
            $("#button2").on("click", flightDeath);
            $("#button3").on("click", hide1);
            $("#button4").on("click", promoteDeath);
        }
    }


    function active1() {
        if (hastools = true) {
            replied = true;
            $("#storyText").html("You log into your email from the pilot\'s computer and reply to those at NICOLINET. Your note reads: <br> <br> \"Dear The Grate Nicoli and Others at NICOLINET, <br> Thank you for contacting me about this suspicion. I have, indeed noticed some suspicious activity lately as an insider at Comcast. In fact, I believe I have compromised a Comcast authority\'s computer. I will be willing to meet up with you concerning this problem. Email me back with a time and location, and I will meet you there with the evidence.\" <br> <br> You send the email, and - wait. You suddenly realize. Comcast has a monopoly on the Internet in this area. That email must have gone through Comcast\'s servers, and with all of this unusual activity going on, there\'s no doubt that they read it. Suddenly, you notice a large drone descending from above. Surely Comcast could\'nt have come that quickly! With Comcast quickly closing in, you choose to:");
            $("#button1").text("Run");
            $("#button2").text("Attempt to trade your stolen items in exchange for your freedom");
            $("#button3").text("Hide");
            $("#button4").text("Surrender all of your information, and use your correspondence with NICOLINET to capture them");
            $("#button1").on("click", restart);
            $("#button2").on("click", mercyDeath);
            $("#button3").on("click", hide1);
            $("#button4").on("click", promoteDeath);
        } else {
            replied = true;
            $("#storyText").html("You write a reply to those at NICOLINET. Your note reads: <br> <br> \"Dear The Grate Nicoli and Others at NICOLINET, <br> Thank you for contacting me about this suspicion. I have, indeed noticed some suspicious activity lately as an insider at Comcast. I will be willing to meet up with you concerning this problem. Email me back with a time and location, and I will meet you there with the evidence.\" <br> <br> You send the email, and - wait. You suddenly realize. Comcast has a monopoly on the Internet in this area. That email must have gone through Comcast\'s servers, and with all of this unusual activity going on, there\'s no doubt that they read it. Suddenly, you notice a large drone descending from above. Surely Comcast could\'nt have come that quickly! With Comcast quickly closing in, you choose to:");
            $("#button1").text("Run");
            $("#button2").text("Attempt to hijack the drone and escape");
            $("#button3").text("Hide");
            $("#button4").text("Surrender all of your information, and use your correspondence with NICOLINET to capture them");
            $("#button1").on("click", restart);
            $("#button2").on("click", flightDeath);
            $("#button3").on("click", hide1);
            $("#button4").on("click", promoteDeath);
        }
    }

    function scene3(event) {
        $(".storyButton").off("click");
        switch (event.target) {
            case button1:
                suspicion = suspicion + 1;
                $("#storyText").html("Upon asking the pilot about the call, he promptly tells you to shut up, and then closes a barrier between you and him. You shortly arrive at your destination and begin to take out your computer to set up the Comcast Fiber&trade; connection when you recieve an email labeled \"URGENT: NEED HELP\". Curious, you open it and read the message inside: <br> \"Dear Mr. Scott, <br> Greetings, I am The Grate Nicoli, head of a large internet corporation known as NICOLINET. Us here at NICOLINET have recently become concerned with Comcast\'s activities as an Internet Service Provider. We would like your assistance in gathering evidence of them conspiring against the citizens of Amurica. If you do so desire to assist us, please return correspondence at the following email: nicoli1817@nicoli.net.\" <br> You decide to:");
                $("#button1").text("Report the email to Comcast");
                $("#button2").text("Respond and try to help");
                $("#button3").text("Don\'t respond, but keep an eye out for suspicious activity");
                $("#button4").text("Investigate by tricking Comcast customer support");
                $("#button1").on("click", promoteDeath);
                $("#button2").on("click", active1);
                $("#button3").on("click", restart);
                $("#button4").on("click", supportDeath);
                break;
            case button2:
                $("#storyText").html("You shortly arrive at your destination and begin to take out your computer to set up the Comcast Fiber&trade; connection when you recieve an email labeled \"URGENT: NEED HELP\". Curious, you open it and read the message inside: <br> \"Dear Mr. Scott, <br> Greetings, I am The Grate Nicoli, head of a large internet corporation known as NICOLINET. Us here at NICOLINET have recently become concerned with Comcast\'s activities as an Internet Service Provider. We would like your assistance in gathering evidence of them conspiring against the citizens of Amurica. If you do so desire to assist us, please return correspondence at the following email: nicoli1817@nicoli.net.\" <br> You decide to:");
                $("#button1").text("Report the email to Comcast");
                $("#button2").text("Respond and try to help");
                $("#button3").text("Don\'t respond, but keep an eye out for suspicious activity");
                $("#button4").text("Investigate by tricking Comcast customer support");
                $("#button1").on("click", promoteDeath);
                $("#button2").on("click", active1);
                $("#button3").on("click", restart);
                $("#button4").on("click", supportDeath);
                break;
            case button3:
                hastools = true;
                suspicion = suspicion + 2;
                $("#storyText").html("You sneakily swap the pilot\'s Comcast technician bag for your own. You now have possesion of the pilot\'s computer, phone, and whatever else he may be hiding. You shortly arrive at your destination and begin to take out the computer to set up the Comcast Fiber&trade; connection when you recieve an email labeled \"URGENT: REBELLION ALERT\". Curious, you open it and read the message inside: <br> \"Dear Monsieur Bernard, <br> We seem to have intercepted an email from some sort of rebellion. The strangest part is, it seems to have been going to our employee Mr. Scott. Why don\'t you see what you can make of it: <br> <br> \'Dear Mr. Scott, <br> Greetings, I am The Grate Nicoli, head of a large internet corporation known as NICOLINET. Us here at NICOLINET have recently become concerned with Comcast\'s activities as an Internet Service Provider. We would like your assistance in gathering evidence of them conspiring against the citizens of Amurica. If you do so desire to assist us, please return correspondence at the following email: nicoli1817@nicoli.net.\'\" <br> <br> You decide to:");
                $("#button1").text("Report the email to Comcast");
                $("#button2").text("Respond and try to help");
                $("#button3").text("Don\'t respond, but keep an eye out for suspicious activity");
                $("#button4").text("Investigate by tricking Comcast customer support");
                $("#button1").on("click", promoteDeath);
                $("#button2").on("click", active1);
                $("#button3").on("click", restart);
                $("#button4").on("click", supportDeath);
                break;
            case button4:
                flightDeath();
                break;
        }
    }

    function scene2() {
        $(".storyButton").off("click");
        $("#storyText").html("You take the company\'s private drone over to the service location, but on the way the pilot of the drone, Monsieur Bernard, accepts a mysterious call that the caller ID reports as Ryan L. Robertson, the CEO of Comcast. <br> <em>Why would he be recieving such an important call?</em> you wonder. You decide to:");
        $("#button1").text("Inquire about the call");
        $("#button2").text("Ignore the call");
        $("#button3").text("Sneakily try to take the pilot\'s phone");
        $("#button4").text("Incapacitate the pilot and take control of the drone");
        $(".storyButton").on("click", function () {
            scene3(event);
        })
    }
    $(".storyButton").on("click", scene2);
})
