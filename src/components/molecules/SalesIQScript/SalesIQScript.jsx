const SalesIQScript = () => {
  return (
    <script
      type="text/javascript"
      id="zsiqchat"
      dangerouslySetInnerHTML={{
        __html: `
          var $zoho=$zoho||{};
          $zoho.salesiq=$zoho.salesiq||{
            widgetcode:"#####",
            values:{},
            ready:function(){}
          };
          var d=document;
          s=d.createElement("script");
          s.type="text/javascript";
          s.id="zsiqscript";
          s.defer=true;
          s.src="https://salesiq.zoho.com/widget";
          t=d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s,t);
          `,
      }}
    />
  );
};

export default SalesIQScript;
