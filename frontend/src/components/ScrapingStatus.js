const ScrapingStatus = ({ data }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Scraping Status</h3>
      <div className="space-y-2">
        <p>Detected: {data.detected}</p>
        <p>Scraped: {data.scraped}</p>
        <p>Pending: {data.pending}</p>
        <div className="mt-4">
          {data.pages.map((page, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <p className="font-medium">{page.url}</p>
              <p>Status: {page.status}</p>
              {page.chunks.length > 0 && (
                <div className="mt-2">
                  <p className="font-medium">Scraped Data:</p>
                  <ul className="list-disc list-inside">
                    {page.chunks.map((chunk, i) => (
                      <li key={i}>{chunk}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrapingStatus;