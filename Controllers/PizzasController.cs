using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace pizzareact.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PizzasController : ControllerBase {

        public object Index() {
            return new { Test = "hello" };
        }
    }
}
