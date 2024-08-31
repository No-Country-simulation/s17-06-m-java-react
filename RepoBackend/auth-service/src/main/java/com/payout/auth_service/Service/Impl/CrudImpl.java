package com.payout.auth_service.Service.Impl;

import java.lang.reflect.Method;
import java.util.List;

import com.payout.auth_service.Exception.ModelNotFoundException;
import com.payout.auth_service.Repository.GenericRepository;
import com.payout.auth_service.Service.ICrud;

public abstract class CrudImpl<T, ID> implements ICrud<T, ID> {

    protected abstract GenericRepository<T, ID> getRepository();

    @Override
    public T save(T t) throws Exception {
        return getRepository().save(t);
    }

    @Override
    public T update(T t, ID id) throws Exception {
        // Java Reflection
        Class<?> clazz = t.getClass();
        String className = clazz.getSimpleName();
        String methodName = "setId" + className;

        Method setIdMethod = clazz.getMethod(methodName, id.getClass());
        setIdMethod.invoke(t, id);
        // t.setIdXYZ(id);
        getRepository().findById(id).orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));
        return getRepository().save(t);
    }

    @Override
    public List<T> readAll() throws Exception {
        return getRepository().findAll();
    }

    @Override
    public T readById(ID id) throws Exception {
        return getRepository().findById(id).orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));
    }

    @Override
    public void delete(ID id) throws Exception {
        getRepository().findById(id).orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));
        getRepository().deleteById(id);
    }

}
