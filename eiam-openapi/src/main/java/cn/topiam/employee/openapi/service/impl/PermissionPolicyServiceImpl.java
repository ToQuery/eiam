/*
 * eiam-openapi - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.openapi.service.impl;

import org.springframework.data.querydsl.QPageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.topiam.employee.common.entity.app.query.AppPolicyQuery;
import cn.topiam.employee.common.entity.permission.PermissionPolicyEntity;
import cn.topiam.employee.common.entity.permission.po.PermissionPolicyPO;
import cn.topiam.employee.common.exception.app.AppPolicyNotExistException;
import cn.topiam.employee.common.repository.permission.PermissionPolicyRepository;
import cn.topiam.employee.openapi.converter.permission.PermissionPolicyConverter;
import cn.topiam.employee.openapi.pojo.request.app.query.OpenApiPolicyQuery;
import cn.topiam.employee.openapi.pojo.request.app.save.AppPermissionPolicyCreateParam;
import cn.topiam.employee.openapi.pojo.request.app.update.AppPermissionPolicyUpdateParam;
import cn.topiam.employee.openapi.pojo.response.app.AppPermissionPolicyGetResult;
import cn.topiam.employee.openapi.service.PermissionPolicyService;
import cn.topiam.employee.support.repository.page.domain.Page;
import cn.topiam.employee.support.repository.page.domain.PageModel;

import lombok.RequiredArgsConstructor;

/**
 * <p>
 * 权限策略 服务实现类
 * </p>
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2020-08-10
 */
@Service
@RequiredArgsConstructor
public class PermissionPolicyServiceImpl implements PermissionPolicyService {

    /**
     * 获取策略列表
     *
     * @param page  {@link PageModel}
     * @param query {@link OpenApiPolicyQuery}
     * @return {@link PermissionPolicyPO}
     */
    @Override
    public Page<PermissionPolicyPO> getPermissionPolicyList(PageModel page,
                                                            OpenApiPolicyQuery query) {
        AppPolicyQuery appPolicyQuery = new AppPolicyQuery();
        // TODO token获取所属应用
        //        appPolicyQuery.setAppId(0L);
        appPolicyQuery.setEffect(query.getEffect());
        appPolicyQuery.setSubjectId(query.getSubjectId());
        appPolicyQuery.setObjectId(query.getObjectId());
        appPolicyQuery.setSubjectType(query.getSubjectType());
        appPolicyQuery.setObjectType(query.getObjectType());
        QPageRequest request = QPageRequest.of(page.getCurrent(), page.getPageSize());
        org.springframework.data.domain.Page<PermissionPolicyPO> data = permissionPolicyRepository
            .findPage(appPolicyQuery, request);
        return permissionPolicyConverter.entityConvertToPolicyListResult(data);
    }

    /**
     * 获取策略
     *
     * @param id {@link String}
     * @return {@link AppPermissionPolicyGetResult}
     */
    @Override
    public AppPermissionPolicyGetResult getPermissionPolicy(String id) {
        return null;
    }

    /**
     * 删除策略
     *
     * @param id {@link String}
     * @return {@link Boolean}
     */
    @Override
    public Boolean deletePermissionPolicy(String id) {
        Long policyId = Long.valueOf(id);
        permissionPolicyRepository.findById(policyId).orElseThrow(AppPolicyNotExistException::new);
        permissionPolicyRepository.deleteById(policyId);
        return true;
    }

    /**
     * 创建策略
     *
     * @param param {@link AppPermissionPolicyCreateParam}
     * @return {@link Boolean}
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean createPermissionPolicy(AppPermissionPolicyCreateParam param) {
        PermissionPolicyEntity resource = permissionPolicyConverter
            .policyCreateParamConvertToEntity(param);
        // 新增策略
        permissionPolicyRepository.save(resource);
        return true;
    }

    /**
     * 更新策略
     *
     * @param param {@link AppPermissionPolicyUpdateParam}
     * @return {@link Boolean}
     */
    @Override
    public Boolean updatePermissionPolicy(AppPermissionPolicyUpdateParam param) {
        PermissionPolicyEntity resource = permissionPolicyConverter
            .policyUpdateParamConvertToEntity(param);
        // 更新策略
        permissionPolicyRepository.save(resource);
        return null;
    }

    private final PermissionPolicyConverter  permissionPolicyConverter;

    private final PermissionPolicyRepository permissionPolicyRepository;
}
