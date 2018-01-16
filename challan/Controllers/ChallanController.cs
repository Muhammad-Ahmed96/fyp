using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Challan.Controllers
{
    public class ChallanController : Controller
    {
        //
        // GET: /Challan/
        public ActionResult SubmitChallan()
        {
            return View();
        }
        public ActionResult PayChallan()
        {
            return View();
        }
        public ActionResult Complain()
        {
            return View();
        }
        public ActionResult Feedback()
        {
            return View();
        }
        public ActionResult CheckStatus()
        {
            return View();
        }
        [HttpPost]
        public JsonResult Submit(string username,string password )
        {
            Object data = null;
            try
            {
                var flag = false;
                var url = "";
                //database checking here
                if (username == "admin" && password == "admin")
                {
                    flag = true;
                    url = Url.Content("~/Challan/SubmitChallan");
                }
                data = new
                {
                    valid = flag,
                    urlToRedirect = url
                };
            }
            catch (Exception)
            {
                data = new
                {
                    valid = false,
                    urlToRedirect = ""
                };
            }
            return Json(data, JsonRequestBehavior.AllowGet);
        }
	}
}