
async function loadMembers(){
    const res = await fetch("members.json");
    const members = await res.json();

    // display executive leads: getElementById
    const exec_leads = members.map(m => memberCard(m))
    // display subteam leads: getElementById
    const subteam_leads = members.map(m => memberCard(m))


}

function memberCard({name, position, headshot, linkedin=''}) {
    return `
        <div class="member-container text-center padding-20px-lr sm-padding-5px-lr">
            <div class="team-style">
                <div class="team-member-img">
                    <img class="img-responsive" src="${headshot}" alt="">
                        <div class="team-description">
                            <div class="team-description-wrapper">
                                <div class="team-description-content">
                                    <div class="social-links">
                                        <a class="d-inline-block margin-15px-right"
                                            href="${linkedin}"><i
                                                class="fab fa-linkedin-in text-white font-size16"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-cover"></div>
                </div>
                <div class="text-center margin-20px-top">
                    <div
                        class="text-extra-dark-gray font-weight-600 font-size18 alt-font margin-5px-bottom">
                        ${name}</div>
                    <div class="font-size14">${position}</div>
                </div>
            </div>
        </div>
    `;

}

loadMembers()