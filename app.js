const api = 'https://randomuser.me/api/?results=10';
function App() {

  const [userData, setUserData] = React.useState([]);
  React.useEffect(() => {

    (async () => {
      try {
        const res = await axios.get(api);
        setUserData(res.data.results)
      } catch (error) {
        alert('頁面資料出現問題，請洽管理人員');
      }
    })()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="row g-3">
        {
          userData.map((data, index) => (
            <div className="col-md-4 col-sm-6" key={`${data.id.name}-${index}-${data.id.value}`}>
              <div className="bg-light p-3" style={{
                height: '100%'
              }}>
                <img
                  src={data.picture.medium}
                  alt="頭像"
                  className="img-fluid rounded-circle"
                />
                <h2 className="mb-0">{`${data.name.last} ${data.name.first}`}</h2>
                <p className="mb-0">{data.email}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
