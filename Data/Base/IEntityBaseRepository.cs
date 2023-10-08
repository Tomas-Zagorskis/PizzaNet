namespace pizzareact.Data.Base {
    public interface IEntityBaseRepository<T> where T : class, IEntityBase, new() {
        Task<IEnumerable<T>> GetAllAsync();
    }
}
