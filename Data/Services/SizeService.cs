using pizzareact.Data;
using pizzareact.Data.Base;
using pizzareact.Models;

namespace pizzareact.Data.Services
{
    public class SizeService : EntityBaseRepository<Size>, ISizeService
    {
        public SizeService(ApiDbContext context) : base(context) { }
    }
}
