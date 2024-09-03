package com.payout.auth_service.Service.Impl;

import java.util.*;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import java.beans.PropertyDescriptor;
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
        // Class<?> clazz = t.getClass();
        // String className = clazz.getSimpleName();
        // String methodName = "setId" + className;
        // Method setIdMethod = clazz.getMethod(methodName, id.getClass());
        // setIdMethod.invoke(t, id);
        // getRepository().findById(id).orElseThrow(() -> new ModelNotFoundException("ID
        // NOT FOUND: " + id));
        // return getRepository().save(t);
        Optional<T> entity = getRepository().findById(id);
        T oldEntity = entity.orElseThrow(() -> new ModelNotFoundException("ID NOT FOUND: " + id));
        BeanUtils.copyProperties(t, oldEntity, getNullPropertyNames(t));
        return getRepository().save(oldEntity);
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

    private String[] getNullPropertyNames(Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = new HashSet<String>();
        for (PropertyDescriptor pd : pds) {
            Object srcValue = src.getPropertyValue(pd.getName());
            if (srcValue == null)
                emptyNames.add(pd.getName());
        }
        String[] result = new String[emptyNames.size()];
        return emptyNames.toArray(result);
    }

}
