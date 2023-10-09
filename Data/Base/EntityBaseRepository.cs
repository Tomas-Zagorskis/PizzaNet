using Microsoft.EntityFrameworkCore;

namespace pizzareact.Data.Base {
    public class EntityBaseRepository<T> : IEntityBaseRepository<T> where T : class, IEntityBase, new() {
        private readonly ApiDbContext _context;

        public EntityBaseRepository(ApiDbContext context) {
            _context = context;
        }

        public async Task<IEnumerable<T>> GetAllAsync() => await _context.Set<T>().ToListAsync();

        public async Task<T> GetByIdAsync(int id) => await _context.Set<T>().FirstOrDefaultAsync(x => x.Id == id);
    }
}
