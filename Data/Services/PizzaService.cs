using pizzareact.Data;
using pizzareact.Data.Base;
using pizzareact.Models;

namespace pizzareact.Data.Services
{
    public class PizzaService : EntityBaseRepository<Pizza>, IPizzaService
    {
        public PizzaService(ApiDbContext context) : base(context) { }
    }
}
