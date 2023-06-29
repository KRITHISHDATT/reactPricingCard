import Card from "./Card";

function App() {

  let data = [
    {
      plan: "FREE",
      price: "0",
      users: "Single User",
      storage: "5GB Storage",
      publicProjects: "Unlimited Public Projects",
      communitAccess: "Communit Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      reports: "Monthly Status Reports",
      isUsers: true,
      isStorage: true,
      isPublicProjects: true,
      isCommunitAccess: true,
      isPrivateProjects: false,
      isPhoneSupport: false,
      isSubDomain: false,
      isReports: false
    },
    {
      plan: "PLUS",
      price: "9",
      users: "Single User",
      storage: "5GB Storage",
      publicProjects: "Unlimited Public Projects",
      communitAccess: "Communit Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      reports: "Monthly Status Reports",
      isUsers: true,
      isStorage: true,
      isPublicProjects: true,
      isCommunitAccess: true,
      isPrivateProjects: true,
      isPhoneSupport: true,
      isSubDomain: true,
      isReports: false
    },
    {
      plan: "PRO",
      price: "49",
      users: "Single User",
      storage: "150GB Storage",
      publicProjects: "Unlimited Public Projects",
      communitAccess: "Communit Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subDomain: "Unlimited Free Subdomain",
      reports: "Monthly Status Reports",
      isUsers: true,
      isStorage: true,
      isPublicProjects: true,
      isCommunitAccess: true,
      isPrivateProjects: true,
      isPhoneSupport: true,
      isSubDomain: true,
      isReports: true
    }
  ];
  return <>
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((res, index) => {
                return <Card data={res} key={index} />
              })
            }
          </div>
        </div>
      </section>
    </div>
  </>
}

export default App;
