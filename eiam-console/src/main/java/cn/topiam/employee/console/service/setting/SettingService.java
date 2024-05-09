/*
 * eiam-console - Employee Identity and Access Management
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
package cn.topiam.employee.console.service.setting;

import java.util.List;

import cn.topiam.employee.common.entity.setting.SettingEntity;

/**
 * @author TopIAM
 * Created by support@topiam.cn on 2021/11/9 22:30
 */
public interface SettingService {
    /**
     * 保存设置
     *
     * @param entity {@link SettingEntity}
     * @return {@link Boolean}
     */
    Boolean saveSetting(SettingEntity entity);

    /**
     * 根据KEY获取配置
     *
     * @param name {@link String}
     * @return {@link SettingEntity}
     */
    SettingEntity getSetting(String name);

    /**
     * 根据KEY模糊获取配置
     *
     * @param name {@link String}
     * @return {@link List<SettingEntity>}
     */
    List<SettingEntity> findByNameLike(String name);

    /**
     * 移除配置
     *
     * @param name {@link String}
     * @return {@link Boolean}
     */
    Boolean removeSetting(String name);
}
