using pizzareact.Data;
using pizzareact.Data.Base;
using pizzareact.Models;

namespace pizzareact.Data.Services
{
    public class ToppingService : EntityBaseRepository<Topping>, IToppingService
    {
        public ToppingService(ApiDbContext context) : base(context) { }
    }
}
